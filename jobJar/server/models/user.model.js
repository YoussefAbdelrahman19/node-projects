import mongoose from "mongoose";


const { Schema } = mongoose;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, email: {
        type: String,
        required: true,
        unique: true
    }, password: {
        type: String,
        required: true,
    }, img: {
        type: String,
    },
    desc: {
        type: String,
    },

    phone: {
        type: String,
        required: true,
    },
    isSeller: {
        type: Boolean,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true })
export default mongoose.model('User', UserSchema)