const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const protect = require('../middleware/authMiddleware');

router.post('/products', productController.tambah);
router.get('/products', protect, productController.getAll);
router.get('/products/:id', protect, productController.getOne);
router.put('/products/:id', protect, productController.update);
router.delete('/products/:id', protect, productController.remove);

module.exports = router;