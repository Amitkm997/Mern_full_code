

import express from 'express'
import { createProfile, getProfile } from '../controller/profilecontroller.js';
import { authentication } from '../middleware/auth.js';

const router=express.Router();

router.post('/create',authentication,createProfile);
router.get('/get',authentication,getProfile);

export default router;