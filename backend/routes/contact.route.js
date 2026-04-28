const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contact.controller');
const { validateContact } = require('../validators/contact.validator');
const { contactRateLimiter } = require('../middleware/rateLimiter');

router.post('/', contactRateLimiter, validateContact, sendContactEmail);

module.exports = router;
