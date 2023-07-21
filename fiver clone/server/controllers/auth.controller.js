import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import createError from '../utils/createError.js'
export const register = async (req, res) => {
    try {
        console.log(req.body)
        const hash = await bcrypt.hash(req.body.password, 5);
        const newUser = new User({
            ...req.body,
            password: hash,
        })
        await newUser.save()
        res.status(201).json({ message: 'user registration successful', newUser })
    } catch (error) {
        res.status(500).send('something went wrong!' + error)
    }
}
export const login = async (req, res, next) => {
    try {
        const { username, password: ps } = req.body;
        if (!username || !ps) {
            return next(createError(404, 'Enter all credentials'))
        }
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            // return res.status(404).json({ message: 'User not found' });
            return next(createError(404, 'User not found'))
        }

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) {
            return res.status(400).json({ message: 'Wrong password or username!' });
        }

        const { password, ...userInfo } = user._doc;
        const token = jwt.sign(
            {
                id: user._id,
                isSeller: user.isSeller,
                username: user.username
            },
            process.env.TOKEN_SECRET
        );

        res.cookie('accessToken', token, { httpOnly: true });
        return res.status(200).json({ message: 'User logged in successfully', userInfo });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie('accessToken', {
            sameSite: 'none',
            secure: true,
        }).status(200).json({ message: 'User has been logged out.' });

    } catch (error) {
        return next(error)

    }
}