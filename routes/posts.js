import express from 'express';
import Post from '../models/Post.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

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

// Crear post
router.post('/', verifyToken, async (req, res) => {
  const { title, content, image } = req.body;

  try {
    const newPost = new Post({
      title,
      content,
      image,
      author: req.user.id
    });

    await newPost.save();
    res.status(201).json({ message: 'Post creado con éxito' });
  } catch (err) {
    res.status(500).json({ message: 'Error al crear el post', error: err.message });
  }
});

// Obtener todos los posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener los posts' });
  }
});

export default router;