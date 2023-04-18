import  asyncHandler  from 'express-async-handler';
import { sample_users } from './../data';
import  jwt  from 'jsonwebtoken';
import { Router } from "express";
import { UserModel } from '../models/user.model';
import { BookModel } from '../models/book.model';

const router = Router();

router.get("/seed", asyncHandler( async (req, res)=>{
  const userCount = await UserModel.countDocuments();  /*Execution is paused when an await keyword is encountered until
   a Promise is completed await will either return a result from a fulfilled Promise or throw an exception from a rejected Promise*/
  if(userCount>0){
      res.send('Seed is already Done!')
  }
  await UserModel.create(sample_users);
  res.send("Seeded Successfully")
}))

router.post("/login", asyncHandler( async (req,res)=>{
    const {email, password} = req.body;
    const user = await UserModel.findOne({email, password})
    if(user){
        res.send(genTokenRes(user))
    }else{
        res.status(400).send("User name or password is not valid!")
    }
}))

const genTokenRes = (user:any)=>{
  const token = jwt.sign({
    email:user.email, isAdmin:user.isAdmin
  },"SomeRandomText",{
    expiresIn:"10d"
  });
  user.token = token;
  return user;
}

export default router;