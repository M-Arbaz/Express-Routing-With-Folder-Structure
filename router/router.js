const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
router.route('/').get(controller.getFun);
router.route('/').post(controller.login);
router.route('/token').post(controller.getToken);
router.route('/verify').post(controller.decToken);
router.route('/otp_buyer').post(controller.buyerRegisterOtp);
router.route('/register_buyer').post(controller.signUpBuyer);
module.exports = router;