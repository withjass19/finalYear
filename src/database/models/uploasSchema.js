import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
    // bookName: { type: String, required: true },
    image: {
        data: Buffer,
        contentType: String
    }
});

export const Upload = mongoose.models.Upload || mongoose.model('Upload', uploadSchema);
