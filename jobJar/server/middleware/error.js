export const errorHandler = (err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || "Something went wrong!";
    return res.status(err.status).json({ message: err.message })
}