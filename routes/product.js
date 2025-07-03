import express from 'express';
import Product from '../models/Product.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// ✅ Ruta pública: obtener todos los productos
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// 🔐 Ruta protegida: agregar producto
router.post('/', verifyToken, async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.status(201).json(newProduct);
});

// 🔐 Ruta protegida: actualizar producto
router.put('/:id', verifyToken, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// 🔐 Ruta protegida: eliminar producto
router.delete('/:id', verifyToken, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;