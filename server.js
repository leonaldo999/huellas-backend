import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/product.js';
import authRoutes from './routes/auth.js';
import dogRoutes from './routes/dogs.js';
import postRoutes from './routes/posts.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/dogs', dogRoutes);
app.use('/api/posts', postRoutes);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Servidor corriendo en http://localhost:5000'));
  })
  .catch(err => console.error(err));