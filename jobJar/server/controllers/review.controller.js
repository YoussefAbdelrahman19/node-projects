import Review from "../models/review.model.js";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";
import Gig from "../models/gig.model.js";

export const createOne = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(401, "sellers can not create reviews."));
  const newReview = new Review({
    ...req.body,
    userId: req.userId,
  });
  try {
    const review = await Review.findOne({
      userId: req.userId,
      gigId: req.body.gigId,
    });
    if (review)
      return next(
        createError(403, "You have already created a review for this gig.")
      );
    const savedReview = await newReview.save();
    const savedGig = await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).json(savedReview);
  } catch (error) {
    next(error);
  }
};
export const getAll = async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
};
export const getOne = async (req, res, next) => {
  try {
    const review = await Review.find({ gigId: req.params.gigId });
    if (!review) next(createError(404, "No such review!"));
    console.log("review info", review);
    res.status(200).json(review);
  } catch (error) {
    next(error);
  }
};

export const deleteOne = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (req.reviewId !== review._id.toString()) {
      return res
        .status(403)
        .json({ message: "You can delete only your account!" });
    }
    await Review.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "something went wrong", error: error });
  }
};
