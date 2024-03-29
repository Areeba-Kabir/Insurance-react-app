const mongoose = require('mongoose');

const InsuranceSchema = new mongoose.Schema({
  insurance_name: {
    type: String,
    required: true
  },
  coverage_type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  coverage_limit: {
    type: String,
    default: null
  },
  premium_rate: {
    type: String,
    required: true
  }
});

const healthinsurance = mongoose.model('health_insurances', InsuranceSchema);

module.exports = healthinsurance;
