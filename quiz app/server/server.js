import express from "express"
import axios from 'axios'
import cors from "cors"
import 'dotenv/config'
import morgan from "morgan"
import quizRoutes from "./routes/quiz.routes.js"
const port = process.env.PORT || 5000

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(quizRoutes)
const start = async () => {
    try {
        app.listen(port, () => console.log(`app listening on ${port}`))
    } catch (error) {
        console.log('error ', error)
    }
}
start()


