import { BOOK_BY_SEARCH_URL, BOOK_URL, BOOK_TAGS_URL, BOOK_BY_TAG_URL, BOOK_BY_ID_URL } from './../shared/models/constants/urls';
import { sample_foods, sample_tags } from './../../data';
import { Injectable } from '@angular/core';
import { Book } from '../shared/models/book';
import { Tag } from '../shared/models/tag';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(BOOK_URL);
  }

  getAllFoodBySearchTerm(searchTerm:string){
    return this.http.get<Book[]>(BOOK_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(BOOK_TAGS_URL);
  }

  getAllFoodsByTags(tag:string):Observable<Book[]>{
   return tag === "All"?
   this.getAll():
   this.http.get<Book[]>(BOOK_BY_TAG_URL + tag);
  }

  getFoodById(bookId:string):Observable<Book>{
    return this.http.get<Book>(BOOK_BY_ID_URL + bookId);
  }

}
