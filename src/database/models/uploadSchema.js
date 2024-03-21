import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
    UId: { type: String, required: true },
    url: { type: String, required: true },
    // image: {
    //     data: Buffer,
    //     contentType: String
    // }
});

export const Upload = mongoose.models.Uploadimages || mongoose.model('Uploadimages', uploadSchema);

// http://res.cloudinary.com/dci10aqu3/image/upload/v1711052647/user_profile_upload/imjdskinsdsj0zbiebga.png