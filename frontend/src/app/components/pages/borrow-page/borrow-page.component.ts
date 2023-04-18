import { BorrowService } from 'src/app/services/borrow.service';
import { Component } from '@angular/core';
import { Borrow } from 'src/app/shared/models/borrow';
import { BorrowItem } from 'src/app/shared/models/borrowItem';

@Component({
  selector: 'app-borrow-page',
  templateUrl: './borrow-page.component.html',
  styleUrls: ['./borrow-page.component.css']
})
export class BorrowPageComponent {
  borrow!: Borrow;
  constructor(private borrowService:BorrowService){
    this.borrowService.getborrowObservable().subscribe((borrow)=>{
      this.borrow = borrow;
    })


  }

  ngOnInit(): void{

  }

  removeFromBorrow(borrowItem:BorrowItem){
    this.borrowService.removeFood(borrowItem.book.id);
  }

  changeQuantity(borrowItem:BorrowItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.borrowService.changeQuantity(borrowItem.book.id, quantity);
  }
}



