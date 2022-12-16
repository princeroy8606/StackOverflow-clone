import mongoose from "mongoose";
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

export const updateProfile = async (req, res) => {
  const {id : id} = req.params;
  const {name, about, tags} =req.body;
  if (!mongoose.Types.ObjectId.isValid(answerId)) {
    return res.status(400).send("Aser id not valid");
  }try{
    const updatedProfile = await User.findByIdAndUpdate(id,{$set:{'name':name,'about':about,'tags':tags}},{new:true})
    res.status(200).json(updateProfile)
    }catch(error){
      res.status(404).json({message:error.message})
    }
}