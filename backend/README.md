# Aura Dynamic Backend

Express.js backend for the contact form with Nodemailer email sending.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASS`: Your Gmail App Password (not your regular password)
  - Go to Google Account > Security > 2-Step Verification > App passwords
  - Generate an app password for "Mail"
- `FRONTEND_URL`: Your frontend URL (default: http://localhost:4200)

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### POST /api/contact
Send a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Inc", // optional
  "message": "Hello, I would like to discuss a project..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully. We will respond within 48 hours."
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "msg": "Name is required", "path": "name" }
  ]
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Gmail App Password Setup

1. Enable 2-Step Verification on your Google Account
2. Go to Google Account > Security > App passwords
3. Select "Mail" and your device
4. Copy the generated 16-character password
5. Use this as `EMAIL_PASS` in your `.env` file
