
import express from "express";
import { createPost, getPosts,deletePost,getAllPost ,updatePost} from "../controller/postController.js";
import { liked,totalLikedByUser,totalUserLikePost ,showNoOfLikes} from "../controller/likeControllser.js";
import { getJulyPost, postPerUser,totalLikedByUsers ,avgLikes,simplePost,postsWithAuthors} from "../controller/advanceController.js";
import {authentication, authorization} from '../middleware/auth.js'
const router=express.Router();

router.post('/create',authentication,createPost)
router.get('/get/:page',authentication,getPosts)
router.get('/allPost',authentication,getAllPost)

//likes routes
router.post('/like/:postId',authentication,liked)
router.get('/like',authentication,totalLikedByUser)
router.get('/userlikes/:postId',authentication,totalUserLikePost)
router.get('/totallikes/:postId',authentication,showNoOfLikes)
router.put('/update/:postId',authentication,authorization,updatePost)
router.delete('/delete/:postId',authentication,authorization,deletePost)

//advanced post
router.get('/julypost',getJulyPost)
router.get('/postPerUser',postPerUser)
router.get('/totalLikedByUser',totalLikedByUsers)
router.get('/avgLikes',avgLikes)
router.get('/simplePost',simplePost)
router.get('/postsWithAuthors',postsWithAuthors)
export default router;