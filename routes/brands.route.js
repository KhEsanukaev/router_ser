const { Router } = require('express');
const { brandsController } = require('../controllers/brands.controller');

const router = Router();

router.get('/brands', brandsController.getBrands);
router.post('/brands', brandsController.getBrands);
router.delete('/brands', brandsController.getBrands);

module.exports = router;