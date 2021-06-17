const router = require('express').Router();
const blogController = require('../controllers/blog_controller')
router.get('/',blogController.tumMakaleleriGetir);
router.get('/:id',blogController.tekMakaleGetir); //request parametresi olarak id eklendi


router.post('/',blogController.aramaYap);


// router.get('/blog/:id',blogController.tumMakaleleriGetir);



module.exports = router;