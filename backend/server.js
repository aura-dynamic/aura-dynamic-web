const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Contact form endpoint
app.post('/api/contact', [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('validation.required')
    .isLength({ max: 100 })
    .withMessage('validation.name.too_long'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('validation.required')
    .isEmail()
    .withMessage('validation.email.invalid')
    .normalizeEmail()
    .isLength({ max: 100 })
    .withMessage('validation.email.invalid'),
  body('company')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 100 })
    .withMessage('validation.name.too_long'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('validation.required')
    .isLength({ min: 10, max: 2000 })
    .withMessage('validation.message.too_short')
], async (req, res) => {
  // Check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation failed:', errors.array());
    return res.status(400).json({
      success: false,
      message: 'validation.failed',
      errors: errors.array().map(err => ({
        field: err.path,
        error: err.msg
      }))
    });
  }

  const { name, email, company, message } = req.body;
  const timestamp = new Date().toISOString();

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'aura.dynamic.contact@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <hr>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
        <p><strong>Timestamp:</strong> ${timestamp}</p>
        <hr>
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}Timestamp: ${timestamp}

Message:
${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully. We will respond within 48 hours.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Contact API available at: http://localhost:${PORT}/api/contact`);
  console.log('Environment variables loaded:', {
    EMAIL_USER: process.env.EMAIL_USER ? 'Configured' : 'Missing',
    EMAIL_PASS: process.env.EMAIL_PASS ? 'Configured' : 'Missing',
    FRONTEND_URL: process.env.FRONTEND_URL || 'Using default'
  });
});
