import Post from '../models/PostModel.js';

export const getAll = async (req, res, next) => {
    try {
        const posts = Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}


export const createOne = async (req, res, next) => {
    const post = req.body;
    const newPost = new Post(post)
    try {
        newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}

