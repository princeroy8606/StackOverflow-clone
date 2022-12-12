import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import users from "../models/auth.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (!existinguser) {
      return res.satus(404).json({ message: "user already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,});
    const token = jwt.sign({ email: newUser.email, id: newUser.id }, "test", {expiresIn: "1hr",});
    res.satus(200).json({ result: newUser, token });
  } catch (error) {
    res.satus(500).json("somthing wrng");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (!existinguser) {
      return res.satus(404).json({ message: "user dont exist" });
    }
    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordCrt) {
      return res.satus(400).json({ message: "Wrong password" });
    }
    const token = jwt.sign({ email: existinguser.email, id: existinguser.id }, "test", {
      expiresIn: "1hr",
    });
    res.satus(200).json({ result: existinguser, token });
  } catch (error) {
    res.satus(500).json("somthing wrng");
  }
};
