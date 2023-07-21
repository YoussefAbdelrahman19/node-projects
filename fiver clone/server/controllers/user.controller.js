import User from "../models/user.model.js"
import jwt from 'jsonwebtoken';
import createError from "../utils/createError.js";

export const getAll = async (req, res) => {
    const users = await User.find();
    res.json(users)
}
export const getOne = async (req, res, next) => {

    try {
        const user = await User.findById(req.params.id);
        if (!user) next(createError(404, 'No such user!'))
        const { password, ...userInfo } = user._doc;
        console.log('user info', userInfo)
        res.status(200).json(userInfo)

    } catch (error) {
        next(error)
    }
}


export const deleteOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (req.userId !== user._id.toString()) {
            return res.status(403).json({ message: 'You can delete only your account!' })
        }
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: 'user deleted successfully' })


    } catch (error) {
        res.status(500).json({ message: 'something went wrong', error: error })
    }
}