# Aura Dynamic - Angular Website

A professional Angular corporate website for Aura Dynamic - a digital solutions company. Built with modern Angular architecture, SEO optimization, bilingual support, and responsive design.

## Features

- **Multi-page Angular Application** with lazy-loaded routes
- **SEO Optimized** with dynamic meta tags per page
- **Bilingual Support** (French/English) with translation service
- **Responsive Design** mobile-first approach
- **Modern Architecture** following Angular best practices
- **Working Contact Form** with Express.js backend
- **Corporate Design** clean, professional B2B aesthetic

## Tech Stack

### Frontend
- Angular 19
- TypeScript 5.7
- Tailwind CSS 3.4
- RxJS
- Angular Router

### Backend
- Express.js
- Nodemailer
- CORS
- express-validator

## Project Structure

```
├── backend/                 # Express.js backend
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── .env.example        # Environment variables template
│   └── README.md           # Backend setup instructions
├── src/
│   ├── app/
│   │   ├── core/           # Services and models
│   │   ├── features/       # Page components
│   │   └── shared/         # Shared UI components
│   ├── assets/             # Static images
│   └── ...config files
```

## Quick Start

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm start
# Navigate to http://localhost:4200/
```

### 2. Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your Gmail credentials:
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password
# FRONTEND_URL=http://localhost:4200

# Start backend server
npm start
# Backend runs on http://localhost:3000/
```

### Gmail App Password Setup

1. Enable 2-Step Verification on your Google Account
2. Go to Google Account > Security > App passwords
3. Select "Mail" and your device
4. Copy the generated 16-character password
5. Use this as `EMAIL_PASS` in your `.env` file

## Production Build

```bash
# Build frontend
npm run build
# Output in dist/aura-dynamic-angular/browser/

# For backend deployment, see backend/README.md
```

## Routes

| Route | Component | Title |
|-------|-----------|-------|
| `/` | Home | Aura Dynamic - Solutions Digitales |
| `/about` | About | À Propos - Aura Dynamic |
| `/solutions` | Solutions | Nos Solutions - Aura Dynamic |
| `/projects` | Projects | Nos Projets - Aura Dynamic |
| `/contact` | Contact | Contact - Aura Dynamic |

## Contact Form API

### POST /api/contact

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Inc",
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

## Key Products

### AURA AUTO
Automotive commercial management platform for dealerships.
- **Clients:** FOTON SFAX, JAC MOTORS SFAX
- **Capabilities:** Client management, vehicle tracking, sales & invoicing, role-based access

### AURA DELIVERY
Delivery and logistics management platform.
- **Client:** RS Delivery
- **Capabilities:** Shipment tracking, COD management, scan-based updates, financial workflows

### HR & Finance Management System
Internal management solution for HR operations and accounting workflows.

## Company Information

- **Address:** Route Mahdia, Rue Cheikh Megdich, Sfax, Tunisia
- **Phone:** (+216) 95653183
- **Email:** aura.dynamic.contact@gmail.com
- **Social:** [Facebook](https://www.facebook.com/aura.dynamic.ste) | [Instagram](https://www.instagram.com/aura_dynamic_ste/) | [LinkedIn](https://www.linkedin.com/company/aura-dynamic)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 Aura Dynamic. All rights reserved.
