import axios from "axios"

export const getQuestions = async (req, res) => {
    const response = await axios.get(`${process.env.API_URL}?amount=${req.params.amount}&difficulty = ${req.params.difficulty}`)
    console.log(response)
    res.status(200).json(response.data)
} 