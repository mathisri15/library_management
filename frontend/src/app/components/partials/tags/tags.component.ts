import { BookService } from 'src/app/services/book.service';
import { Tag } from './../../../shared/models/tag';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(bookService:BookService){
     bookService.getAllTags().subscribe(serverTags =>{
      this.tags = serverTags;
     }) ;
  }

}
