import mongoose from "mongoose";
import Users from "../../Client/src/pages/Users/Users";
import User from "../models/auth.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    const alluserDetails = [];
    allUsers.forEach((Users) => {
      alluserDetails.push({
        id: Users.id,
        name: Users.name,
        about: Users.about,
        tags: Users.tags,
        joinedOn: Users.jointOn,
      });
    });
    res.status(200).json(alluserDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
