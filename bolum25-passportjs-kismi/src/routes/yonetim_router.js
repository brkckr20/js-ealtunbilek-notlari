const router = require('express').Router();
const yonetimController = require('../controllers/yonetim_controller');
router.get('/yonetim', yonetimController.anasayfayiGoster);


module.exports = router;