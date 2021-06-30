const router = require('express').Router();
const authController = require('../controllers/auth_controller');
const validatorMiddleware = require('../middlewares/validation_middleware');

router.get('/login', authController.loginFormunuGoster);
router.post('/login', authController.login);

router.get('/register', authController.registerFormunuGoster);
router.post('/register',validatorMiddleware.validateNewUser(), authController.register);

router.get('/forgot_password', authController.forgotPasswordFormunuGoster);
router.post('/forgot_password', authController.forgotPassword);


module.exports = router;