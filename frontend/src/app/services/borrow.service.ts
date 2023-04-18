import { Book } from '../shared/models/book';
import { BorrowItem } from './../shared/models/borrowItem';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Borrow } from '../shared/models/borrow';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  private borrow:Borrow = this.getBorrowFromLocalStorage();
  private borrowSubject: BehaviorSubject<Borrow> = new BehaviorSubject(this.borrow);
  constructor() { }
  addToBorrow(book:Book):void{
    let borrowItem = this.borrow.items.find(item => item.book.id === book.id);
    console.log(borrowItem);
    if(borrowItem)
    return;

    this.borrow.items.push(new BorrowItem(book));
    this.setBorrowToLocalStorage();
  }

  removeFood(bookId: string): void{
    this.borrow.items = this.borrow.items.filter(item => item.book.id != bookId);
    this.setBorrowToLocalStorage();

  }

  changeQuantity(bookId:string, quantity: number){
    let borrowItem = this.borrow.items.find(item => item.book.id === bookId);
    if(!borrowItem)
    return;

    borrowItem.quantity = quantity;
    borrowItem.price = quantity * borrowItem.book.price;
    this.setBorrowToLocalStorage();

  }

  clearborrow(){
    this.borrow = new Borrow();
    this.setBorrowToLocalStorage();

  }

  getborrowObservable():Observable<Borrow>{
    return this.borrowSubject.asObservable();
  }

  private setBorrowToLocalStorage():void{
    this.borrow.totalPrice = this.borrow.items
    .reduce((prevSum, currentItem)=> prevSum + currentItem.price, 0);
    this.borrow.totalCount = this.borrow.items
    .reduce((prevSum, borrowItem)=> prevSum + borrowItem.quantity, 0);
    const borrowJson = JSON.stringify(this.borrow);
    localStorage.setItem('Borrow', borrowJson);
    this.borrowSubject.next(this.borrow);
  }

  private getBorrowFromLocalStorage(): Borrow{
    const borrowJson = localStorage.getItem('Borrow');
    return borrowJson? JSON.parse(borrowJson): new Borrow();

  }
}
