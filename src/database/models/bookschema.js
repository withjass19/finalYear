const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: { type: String, required: true },
    status: { type: String, required: true },
    author: { type: String, required: true },
    addition: { type: String },
    subject: { type: String },
    ISBN: { type: Number },
    type: { type: String },
    publisher: { type: String },
    description: { type: String, required: true },
    UId: { type: String, required: true },
    price: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export const Bookx = mongoose.models.book || mongoose.model("book", bookSchema);