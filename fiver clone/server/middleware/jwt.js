import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token)
        return res.status(401).json({ message: "You are not authenticated!" });

    jwt.verify(token, process.env.TOKEN_SECRET, async (err, payload) => {
        if (err) return res.status(403).json({ message: "token is not vaild!" });
        req.userId = payload.id;
        req.username = payload.username;
        req.isSeller = payload.isSeller;
    });
    next();
};
