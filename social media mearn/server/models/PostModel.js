import mongoose from 'mongoose'
const postSchema = mongoose.Schema({
    title: String,
    content: String,
    creator: String,
    tags: [String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})
export default mongoose.model("Post",postSchema)