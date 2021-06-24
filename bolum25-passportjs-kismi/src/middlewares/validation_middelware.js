const { body } = require('express-validator');

const validateNewUser = () => {
    return [
        body('email')
            .trim()
            .isEmail()
            .withMessage('Geçerli bir email giriniz'),

        body('parola')
            .trim()
            .isLength({ min: 6 }).withMessage('Şifre en az 6 karakter olmalıdır')
            .isLength({ max: 20 }).withMessage('Şifre en fazla 20 karakter olmalıdır'),

        body('ad')
            .trim()
            .isLength({ min: 2 }).withMessage('İsim en az 2 karakter olmalıdır')
            .isLength({ max: 30 }).withMessage('İsim en fazla 30 karakter olmalıdır'),
        body('soyad')
            .trim()
            .isLength({ min: 2 }).withMessage('Soyisim en az 2 karakter olmalıdır')
            .isLength({ max: 30 }).withMessage('Soyisim en fazla 30 karakter olmalıdır'),
            body('parolatekrar').trim().custom((value, {req}) => {
                if (value !== req.body.parola) {
                    throw new Error('Şifreler Uyuşmuyor.')
                }
                return true;
            })

    ];
}

const validateLogin = () => {
    return [
        body('email')
            .trim()
            .isEmail()
            .withMessage('Geçerli bir email giriniz'),
        body('parola')
            .trim()
            .isLength({ min: 6 }).withMessage('Şifre en az 6 karakter olmalıdır')
            .isLength({ max: 20 }).withMessage('Şifre en fazla 20 karakter olmalıdır'),
    ];
}

module.exports = {
    validateNewUser,
    validateLogin
}