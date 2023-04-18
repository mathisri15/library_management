import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-concept',
  templateUrl: './observable-concept.component.html',
  styleUrls: ['./observable-concept.component.css']
})
export class ObservableConceptComponent implements OnInit, OnDestroy{

  private mySub!: Subscription;
  ngOnInit(){
    //promise ==>
  // const promise = new Promise((resolve =>{
  //   setTimeout(()=>{
  //    resolve("promise works");
  //   }, 1000)
  //  }))
  //  promise.then(result => console.log(result));

    //observable ==>
  //  const observable = new Observable((sub=>{

  //    setTimeout(()=>{

  //     sub.next("observable works")
  //    }, 1000)
  //  }))

  //  this.mySub = observable.subscribe(result=> console.log('sub' + result));

  // Observable is unicast ==>
  // const observable = new Observable((sub=>{
  //   sub.next(Math.random());
  // }))

  // observable.subscribe(result => console.log(result) );
  // observable.subscribe(result => console.log(result) );

  //Subject Multicast ==>
  // const subject = new Subject();
  // subject.subscribe(d => console.log(d));
  // subject.subscribe(d => console.log(d));

  // subject.next(Math.random());


  //Behaviour Subject ==>
  // const bsub = new BehaviorSubject(100);
  // bsub.subscribe(d => console.log('sub1'+ d));
  // bsub.next(1200);
  // bsub.subscribe(d => console.log('sub2'+ d));

  }

  ngOnDestroy() {
  this.mySub.unsubscribe();
  }

}
