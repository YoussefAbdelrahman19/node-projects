import mongoose from "mongoose";

const { Schema } = mongoose;
const ConversationSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true
        },
        buyerId: {
            type: String,
            required: true,
        },
        sellerId: {
            type: String,
            required: true,
        },
        readBySeller: {
            type: Boolean,
        },
        readByBuyer: {
            type: Boolean,
        },
        lastMessage: {
            type: String,
        },

    },
    { timestamps: true }
);
export default mongoose.model("Conversation", ConversationSchema);
