// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,      // Nuevo campo
  email: String,
  password: String, // Hasheada
  isAdmin: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('User', userSchema);