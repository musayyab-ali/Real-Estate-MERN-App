import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password, phone, cnic, address } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashPassword,
    phone,
    cnic,
    address,
  });

  try {
    await newUser.save();
    res.status(201).json("User Register Successfully..!!");
  } catch (error) {
    next(error);
  }
};
