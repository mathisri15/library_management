
import { Schema,model } from "mongoose";
export interface Book{
    id:string;
  title:string;
  price:number;
  tags:string[];
  imageUrl:string;
  author:string;
  publish_date:string;
  subject:string;
}

export const BookSchema = new Schema<Book>(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publish_date:{
            type:String,
            required:true
        },
        subject:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        tags:{
            type:[String]
        },
        imageUrl:{
            type:String,
            required:true
        },
        
    },{
        toJSON:{
            virtuals:true  // virtuals are not save in db, if virtual=true then it sets _id --> id
        },
        toObject:{
            virtuals:true  // when you want values from db
        },
        timestamps:true
    }
)

export const BookModel = model<Book>('book', BookSchema)