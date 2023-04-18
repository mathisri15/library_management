import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BorrowService } from 'src/app/services/borrow.service';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-food-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  book!: Book;
  constructor (activatedRoute:ActivatedRoute, bookService:BookService, private borrowService: BorrowService, private router:Router ){
    activatedRoute.params.subscribe((params)=>{
      if(params.id){
        bookService.getFoodById(params.id).subscribe(serverBook =>{
          this.book = serverBook;
        });
      }
    })
  }

  ngOnInit(): void{

  }

  addToBorrow(){
  this.borrowService.addToBorrow(this.book);
  this.router.navigateByUrl('/borrow-page');
  }

}
