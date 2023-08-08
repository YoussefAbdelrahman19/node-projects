import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";
export const getOne = async (req, res, next) => {
    try {
        const gig = await Gig.findOne({ _id: req.params.id });
        if (!gig) next(404, "gig not found");
        return res.status(200).json(gig);
    } catch (error) {
        next(createError(500, "Something went wrong!"));
    }
};
export const getAll = async (req, res, next) => {
    try {
        const q = req.query;
        console.log("running query", q);
        const filters = {
            ...(q.userId && { userId: q.userId }),
            ...(q.search && { title: { $regex: q.search, $options: "i" } }),
            ...(q.cat && { cat: { $regex: q.cat, $options: "i" } }),
            ...((q.min || q.max) && { price: { ...(q.min && { $gt: q.min }), ...(q.max && { $lt: q.max }) } }),
        };

        console.log("running filter", filters);

        const gigs = await Gig.find(filters).sort({[q.sort]:-1});
        return res.status(200).json(gigs);
    } catch (error) {
        next(createError(500, "Something went wrong!"));
    }
};
export const createOne = async (req, res, next) => {
    try {
        if (!req.isSeller)
            return next(createError(401, "Only seller can create a gig"));
        const newGig = new Gig({
            userId: req.userId,
            ...req.body,
        });

        const savedGig = await newGig.save();
        return res.status(201).json(savedGig);
    } catch (error) {
        next(createError(500, "Something went wrong!"));
    }
};
export const deleteOne = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id);
        if (gig.userId !== req.userId)
            return next(createError(403, "You cannot delete only your gig"));
        await Gig.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "gig deleted successfully" });
    } catch (error) {
        next(createError(500, "Something went wrong!"));
    }
};
