const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 2 characters',
      'string.max': 'Name cannot exceed 100 characters'
    }),
  email: Joi.string().trim().email().lowercase().required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please provide a valid email address'
    }),
  company: Joi.string().trim().max(100).allow('', null),
  message: Joi.string().trim().min(10).max(2000).required()
    .messages({
      'string.empty': 'Message is required',
      'string.min': 'Message must be at least 10 characters',
      'string.max': 'Message cannot exceed 2000 characters'
    }),
  // Honeypot field - must be empty
  website: Joi.string().valid('').allow(null, '').optional()
});

const validateContact = (req, res, next) => {
  const { error } = contactSchema.validate(req.body, { abortEarly: false });
  
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: error.details.map(err => ({
        field: err.path[0],
        message: err.message
      }))
    });
  }
  
  next();
};

module.exports = { validateContact };
