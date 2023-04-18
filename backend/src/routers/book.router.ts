import { Router } from "express";
import { sample_foods, sample_tags } from "../data";
import asyncHandler from "express-async-handler";
import { BookModel } from "../models/book.model";
const router = Router();

// we use seed to insert all data from frint data.ts to mongo database==>
router.get("/seed", asyncHandler( async (req, res)=>{
    const bookCount = await BookModel.countDocuments();  /*Execution is paused when an await keyword is encountered until
     a Promise is completed await will either return a result from a fulfilled Promise or throw an exception from a rejected Promise*/
    if(bookCount>0){
        res.send('Seed is already Done!')
    }
    await BookModel.create(sample_foods);
    res.send("Seeded Successfully")
}))

router.get("/", asyncHandler( async (req, res)=>{
    const books = await BookModel.find();
    res.send(books);
}))

router.get("/search/:searchTerm", asyncHandler( async (req, res)=>{
    const searchRE = new RegExp(req.params.searchTerm, 'i')
    const books = await BookModel.find({
        $or: [{title:{$regex:searchRE}}, {author:{$regex:searchRE}}, {subject:{$regex:searchRE}}, {publish_date:{$regex:searchRE}}]})
    res.send(books)
}))

router.get("/tags", asyncHandler( async (req, res)=>{
    const tags = await BookModel.aggregate([
        {
            $unwind:'$tags'
        },
        {
            $group:{
                _id: '$tags',
                count:{$sum:1}
            }
        },
        {
            $project:{
                _id:0,
                name:'$_id',
                count: '$count'
            }
        }
    ]).sort({count:-1})

    const all={
        name: 'All',
        count: await BookModel.countDocuments()
    }

    tags.unshift(all)
    res.send(tags);
}))

router.get("/tag/:tagName", asyncHandler( async (req, res)=>{
    const tags = await BookModel.find({tags:req.params.tagName})
    res.send(tags);
}))

router.get("/:bookId", asyncHandler( async (req, res)=>{
    const foodId = await BookModel.findById(req.params.bookId)
    res.send(foodId);
}))

export default router;