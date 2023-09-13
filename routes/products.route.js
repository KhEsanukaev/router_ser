const { Router } = require('express');
const { productsController } = require('../controllers/products.controller');

const router = Router();

router.get('/products', );

router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProductById);
router.post('/products', productsController.createProducts);
router.delete('/products/:id', productsController.deleteProducts);

module.exports = router;

