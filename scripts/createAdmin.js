// scripts/createAdmin.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User.js';

dotenv.config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const hashed = await bcrypt.hash('cataSor9281', 10);
    await User.create({ name: 'Admin', email: 'leonaldo999@gmail.com', password: hashed, isAdmin: true });
    console.log('Admin creado');
  } catch (err) {
    console.error('Error creando admin:', err);
  } finally {
    process.exit();
  }
}

createAdmin();