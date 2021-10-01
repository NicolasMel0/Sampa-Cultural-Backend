const { Schema, model } = require('mongoose');

const AdminSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    passwordHash: { type: String, required: true },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN', 'USER'],
        default: 'USER',
    },
});

const AdminModel = model('User', UserSchema);

module.exports = AdminModel;
