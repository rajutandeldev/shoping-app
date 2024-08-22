const express = require('express');
const { generateOtp } = require('../controller/generateOtpController');

const route = express.Router();

route.post(`/generateOtp`,generateOtp);

module.exports = route;