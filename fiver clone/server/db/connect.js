import mongoose from 'mongoose';

export default mongoose.connect(process.env.MONGO_URL||"mongodb://127.0.0.1:27017/fiver-clone")
