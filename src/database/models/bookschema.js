const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    url: { type: String, required: true },
    bookName: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    addition: { type: String },
    subject: { type: String },
    condition: { type: String },
    ISBN: { type: Number },
    type: { type: String },
    binding: { type: String },
    category: { type: String },
    UId: { type: String, required: true },
    price: { type: String, required: true },
    selling_prince: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const Book = mongoose.models.books || mongoose.model("books", bookSchema);