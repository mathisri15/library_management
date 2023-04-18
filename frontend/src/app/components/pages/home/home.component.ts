import { Observable } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/models/book';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 totalLength:any;
 page:number =1;
 books:Book[]=[];
 constructor(private bookService:BookService, activatedRoute:ActivatedRoute) {
  let booksObservable:Observable<Book[]>;
  activatedRoute.params.subscribe((params)=>
  {
    if(params.searchTerm)
    booksObservable = this.bookService.getAllFoodBySearchTerm(params.searchTerm);

    else if(params.tag)
    booksObservable = this.bookService.getAllFoodsByTags(params.tag);

    else
    booksObservable = this.bookService.getAll();

    booksObservable.subscribe((serverBooks)=>{
      this.books = serverBooks;

    })

  });
 }


 ngOnInit(){
  this.bookService.getAll().subscribe((result)=>{
    this.books =result;

    this.totalLength = result.length;
    console.log(this.books)
  })
 }

}


