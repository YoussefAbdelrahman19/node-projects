import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from "dotenv"
import postRouter from './routes/postRoute.js'
import connectDB from './db/connect.js'
import express from 'express'
const app = express();
const port = process.env.port || 5000;
dotenv.config()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/api/posts', postRouter)

const start = async () => {
    await connectDB()
    app.listen(port, () => {
        console.log(`app listening on port ${port}`)
    })

}

start()
