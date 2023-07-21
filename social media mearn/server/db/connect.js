import mongoose from "mongoose"
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`server connected on ${mongoose.connection.host}`)

    }
    catch (err) {
        console.log(`error in db server => ${err}`)

    }
}
export default connectDB