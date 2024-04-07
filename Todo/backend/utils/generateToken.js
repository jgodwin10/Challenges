import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const { username, _id } = user;

  const token = jwt.sign({ _id, username }, process.env.SECRET, {
    expiresIn: "1d",
  });
  return token;
};
