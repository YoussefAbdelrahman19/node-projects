import mongoose from "mongoose";

const { Schema } = mongoose;
const OrderSchema = new Schema(
    {
        sellerId: {
            type: String,
            required: true,
        },
        buyerId: {
            type: String,
            required: true,
        },
        gigId: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            enum: [1, 2, 3, 4, 5]

        },
        isCompleted: {
            type: Boolean,
             default: false

        },
        payment_intent: {
            type: String,
            required: true,
        },


    },
    { timestamps: true }
);
export default mongoose.model("Order", OrderSchema);
