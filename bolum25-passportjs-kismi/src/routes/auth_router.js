const router = require('express').Router();
const authController = require('../controllers/auth_controller');

router.get('/login', authController.loginFormunuGoster);

router.post('/login', authController.loginOl);

router.get('/register', authController.registerFormunuGoster);

router.post('/register', authController.registerEkle);

router.get('/forgot_password', authController.forgotPasswordFormunuGoster); // şu istek gelirse bunu yap

router.post('/forgot_password', authController.forgotPassword); // şu istek gelirse bunu yap


module.exports = router;