// routes/auth.js
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

// Registro de nuevos usuarios
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body; // Añade name

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: 'El correo ya está registrado' });
  }

  const hashed = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashed }); // Guarda name
  await newUser.save();

  res.status(201).json({ message: 'Usuario creado' });
});



// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Contraseña incorrecta' });

  const isAdmin = user.isAdmin;

  const token = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    token,
    isAdmin: user.isAdmin,
    name: user.name
  });
});

export default router;