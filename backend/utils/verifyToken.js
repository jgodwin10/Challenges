import asyncHandler from "express-async-handler"

export const verifyToken = asyncHandler(async (req, res) => {
    const token = req.cookies.token
    console.log(token);
})