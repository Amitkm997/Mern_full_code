
import express from "express";
import { createPost, getPosts } from "../controller/postController.js";
import { liked,totalLikedByUser,totalUserLikePost ,showNoOfLikes} from "../controller/likeControllser.js";

const router=express.Router();

router.post('/create',createPost)
router.get('/get/:page',getPosts)

//likes routes
router.post('/like/:postId',liked)
router.get('/like',totalLikedByUser)
router.get('/userlikes/:postId',totalUserLikePost)
router.get('/totallikes/:postId',showNoOfLikes)

export default router;