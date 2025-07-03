import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  image: String,
  date: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Post', postSchema);