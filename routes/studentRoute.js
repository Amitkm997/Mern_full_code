

import express from "express";
import {createStudent, findStudent, updateStudent,deleteStudent} from '../controller/studentController.js'
const router=express.Router();

router.post('/create',createStudent) //create student
router.get('/find',findStudent) //find students
router.put('/update',updateStudent) //update student
router.delete('/delete',deleteStudent) //delete student

export default router;