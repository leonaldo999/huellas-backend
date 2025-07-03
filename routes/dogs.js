import express from 'express';
import Dog from '../models/Dog.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware para verificar token
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token requerido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Token inválido' });
  }
}

// POST /api/dogs - Agregar perrito
router.post('/', verifyToken, async (req, res) => {
  const { name, age, size, description, imageUrl } = req.body; // Elimina breed y status del destructuring

  try {
    const newDog = new Dog({
      name,
      age,
      size,
      description,
      imageUrl,
      createdBy: req.user.id
    });

    await newDog.save();
    res.status(201).json({ message: 'Perrito agregado con éxito' });
  } catch (err) {
    res.status(500).json({ message: 'Error al guardar el perrito', error: err.message });
  }
});

export default router;