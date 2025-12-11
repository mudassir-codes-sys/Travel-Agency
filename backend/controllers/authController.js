import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "14d" });
};

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "User already exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    const token = generateToken(newUser._id);
    res.status(200).json({ message: "User registered successfully", token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const exist = await User.findOne({ email });
    if (!exist) return res.status(404).json({ message: "Invalid Credentials" });
    const isMatch = await bcrypt.compare(password, exist.password);
    if (!isMatch)
      return res.status(404).json({ message: "Invalid Credentials" });
    const token = generateToken(exist._id);
    res.status(201).json({ message: "User Logged in successfully", token });
  } catch (error) {
    next(error);
  }
};
export { signup, login };
