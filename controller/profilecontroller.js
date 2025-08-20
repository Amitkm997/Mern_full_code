import cloudinary from "../config/cloudinary.js";
import Profile from "../models/ProfileModel.js";
import User from "../models/userModel.js";

export const createProfile = async (req, res) => {
    try {
        const { bio, age } = req.body;
        console.log(req.user)
        
        const result=await cloudinary.uploader.upload(req.file.path,{
            folder:"profiles"
        })

        let profile = await Profile.create({ bio, age, user: req.user.userId,image: result.secure_url})
        res.status(201).send({ message: "profile created successfully", profile: profile })
    } catch (err) {
        res.status(500).send({ message: "internal server error", error: err.message })
    }
}

export const getProfile = async (req, res) => {
    try {
        let profile = await Profile.findOne({ user: req.user.userId }).populate('user','name email');
        res.send({ profile: profile });
    } catch (err) {
        res.status(500).send({ message: "internal server error", error: err.message })
    }
}