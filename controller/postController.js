import User from "../models/userModel.js"
import Post from "../models/PostModel.js"

export const createPost=async(req,res)=>{
     const{email,title,content}=req.body;
     const user=await User.findOne({email})
     if(!user) return res.status(404).send({message:"user not found"});
     const post=await Post.create({title,content,user:user._id});  
     res.status(201).send({message:"post created successfully",post:post})
}

export const getPosts=async (req,res) => {
    const{email}=req.body;
    
    let pages=req.params.page
    let limit=5
    let skip=(pages-1)*limit
    let user=await User.findOne({email})
    //user= {
    //     _id: new ObjectId('686bd1c307193402768f03fb'),
    //     name: 'Amit',
    //     email: 'amitkm997@gmail.com',
    //     password: '12345678',
    //     __v: 0
    //   }
    let posts=await Post.find({user:user._id}).sort({createdAt:-1})
    .skip(skip).limit(limit)
    
    res.status(200).send({message:"post fetched successfully",posts:posts})
}



