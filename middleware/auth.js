import jwt from 'jsonwebtoken'
import Post from '../models/PostModel.js';
export const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log(token)
        if (!token) return res.status(401).send({ message: "token not provided" });

        let decoded=await jwt.verify(token,"This is a secret key");
        // console.log(decoded)
        
        req.user=decoded
        next()
    } catch (err) {
         res.status(500).send({message:"Internal server error",error:err.message})
    }
}

export const authorization=async (req,res,next) => {
    try{
        let userId=req.user.userId;
        let postId=req.params.postId;
        let userDetail=req.user
         
        let post=await Post.findById(postId)
        if(!post) return res.status(404).send({message:"post not found"})
        console.log(post.user.toString)
    console.log(req.user.userId)
        if(userId!==post.user.toString()){
            return res.status(403).send({message:"unauthorized user"})
        }
        req.user=userDetail
        next()

    }catch (err) {
        res.status(500).send({message:"Internal server error",error:err.message})
   }
}