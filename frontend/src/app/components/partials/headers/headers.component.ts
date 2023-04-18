import { UserService } from 'src/app/services/user.service';
import { Borrow } from 'src/app/shared/models/borrow';
import { BorrowService } from 'src/app/services/borrow.service';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {
  borrowQuantity=0;
  user!:User;
  constructor (borrowService:BorrowService ,private userService:UserService){
    borrowService.getborrowObservable().subscribe((newBorrow)=>{
      this.borrowQuantity = newBorrow.totalCount;
    })

    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser;
      console.log(this.user);
    })
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
