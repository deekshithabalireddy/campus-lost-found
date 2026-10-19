const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ['Electronics', 'Books', 'ID Cards', 'Clothing', 'Accessories', 'Keys', 'Bags', 'Others'],
    },
    description: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    type: { type: String, required: true, enum: ['lost', 'found'] },
    imageUrl: { type: String, default: '' },
    status: { type: String, enum: ['open', 'claimed', 'returned'], default: 'open' },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);