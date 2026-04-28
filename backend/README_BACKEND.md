# Aura Dynamic - Backend Documentation

This is the Node.js backend for the Aura Dynamic application. Its primary responsibility is handling contact form submissions securely and efficiently.

## 🚀 Features

- **Input Validation:** Strict validation using `Joi`.
- **Security:**
  - `helmet` for secure HTTP headers.
  - `CORS` restricted to specific domains.
  - `express-rate-limit` to prevent spam/abuse.
  - **Honeypot Field:** Anti-spam mechanism to catch automated bots.
  - **Header Injection Prevention:** Sanitization of email headers.
- **Logging:** Structured request logging with `morgan`.
- **Clean Architecture:** Modular structure (Routes, Controllers, Validators).

## 📂 Project Structure

```text
backend/
├── config/             # Configuration files (CORS, etc.)
├── controllers/        # Business logic
├── middleware/         # Custom middlewares (Rate limiter, etc.)
├── routes/             # API route definitions
├── validators/         # Input validation schemas
├── server.js           # Main entry point
├── .env.example        # Template for environment variables
└── README_BACKEND.md   # This documentation
```

## 🛠️ Setup Instructions

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment:**
   - Copy `.env.example` to `.env`.
   - Fill in your SMTP credentials (`EMAIL_USER`, `EMAIL_PASS`).
   - *Note:* If using Gmail, use an **App Password**.

4. **Run locally:**
   ```bash
   npm run dev
   ```

## 🔌 API Endpoints

### POST `/api/contact`

Submit a contact form inquiry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Optional Company",
  "message": "Hello, I am interested in your services...",
  "website": ""  // Honeypot: MUST be empty or omitted
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Message sent successfully. We will respond within 48 hours."
}
```

**Response (Validation Error):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Please provide a valid email address" }
  ]
}
```

## 🛡️ Security Considerations

- **Rate Limiting:** Each IP is limited to 5 requests per 15 minutes.
- **Data Privacy:** Internal errors and stack traces are suppressed in production.
- **Email Security:** Emails are sent to both `aura.dynamic.contact@gmail.com` and `omarguetat.sfax@gmail.com` using a secure SMTP transport.
