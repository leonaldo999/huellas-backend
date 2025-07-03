import mongoose from 'mongoose';

const dogSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: String,
  size: String, // Si quieres aceptar size, agrégalo aquí
  description: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Dog', dogSchema);