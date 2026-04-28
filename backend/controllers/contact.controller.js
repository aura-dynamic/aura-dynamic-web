const nodemailer = require('nodemailer');
require('dotenv').config();

// Recipients list
const RECIPIENTS = [
  'omarguetat.sfax@gmail.com',
  'aura.dynamic.contact@gmail.com',
  'katabino600@gmail.com'
];

/**
 * Strips carriage returns and newlines from strings to prevent header injection
 * @param {string} str 
 * @returns {string}
 */
const sanitizeHeader = (str) => {
  return str ? str.replace(/[\r\n]/g, '') : '';
};

const sendContactEmail = async (req, res) => {
  const { name, email, company, message, website } = req.body;

  // Check honeypot (website field should be empty)
  if (website) {
    console.warn(`Spam detected from IP: ${req.ip}. Honeypot field filled.`);
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully. We will respond within 48 hours.'
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const sanitizedName = sanitizeHeader(name);
    const sanitizedEmail = sanitizeHeader(email);
    const timestamp = new Date().toLocaleString();

    // Send emails individually for maximum reliability
    const sendPromises = RECIPIENTS.map(recipient => {
      const mailOptions = {
        from: `"${sanitizedName}" <${process.env.EMAIL_USER}>`,
        replyTo: sanitizedEmail,
        to: recipient,
        subject: `[Aura Dynamic] New Contact from ${sanitizedName}`,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Date: ${timestamp}

Message:
${message}
        `,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Date:</strong> ${timestamp}</p>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <h3 style="color: #374151;">Message:</h3>
            <p style="white-space: pre-wrap; background: #f9fafb; padding: 15px; border-radius: 5px;">${message}</p>
          </div>
        `
      };
      return transporter.sendMail(mailOptions);
    });

    const results = await Promise.allSettled(sendPromises);
    
    // Log results for each recipient
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Success: Email delivered to ${RECIPIENTS[index]}`);
      } else {
        console.error(`Error: Failed to deliver to ${RECIPIENTS[index]}:`, result.reason.message);
      }
    });

    // If at least one email was sent, consider it a success for the user
    const successCount = results.filter(r => r.status === 'fulfilled').length;
    
    if (successCount === 0) {
      throw new Error('All email delivery attempts failed');
    }
    
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully. We will respond within 48 hours.'
    });

  } catch (error) {
    console.error('Email Error:', error.message);
    // Do not leak stack trace or internal details
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
};

module.exports = { sendContactEmail };
