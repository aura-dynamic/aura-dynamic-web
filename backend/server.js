const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const corsMiddleware = require('./config/cors.config');
const contactRoutes = require('./routes/contact.route');

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middleware
app.use(helmet()); // Sets various HTTP headers for security
app.use(corsMiddleware);
app.use(express.json({ limit: '10kb' })); // Limit body size to prevent DoS

// Logging
app.use(morgan('combined')); // Structured logging

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    status: 'OK', 
    timestamp: new Date().toISOString() 
  });
});

// Routes
app.use('/api/contact', contactRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found'
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.message);
  
  const statusCode = err.message === 'Not allowed by CORS' ? 403 : 500;
  
  res.status(statusCode).json({
    success: false,
    message: statusCode === 403 ? 'CORS error: Origin not allowed' : 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`[Aura Dynamic] Backend running on port ${PORT}`);
  console.log(`[Aura Dynamic] Environment: ${process.env.NODE_ENV || 'development'}`);
});
