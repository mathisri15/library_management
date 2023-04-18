import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATE_MASSEGES:any = {
  required:'Fill this feild',
  email:'Enter valid Email'
}

@Component({
  selector: 'input-validate',
  templateUrl: './input-validate.component.html',
  styleUrls: ['./input-validate.component.css']
})
export class InputValidateComponent implements OnInit, OnChanges {
  @Input()
  control!:AbstractControl;
  @Input()
  showErrorsWhen: boolean = true;
  errorMsg: string[]=[];

  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
      this.checkValidation
  }

  ngOnInit(): void{
   this.control.statusChanges.subscribe(()=>{
    this.checkValidation();
   })

   this.control.valueChanges.subscribe(()=>{
    this.checkValidation();
   })
  }
  checkValidation(){
    const errors = this.control.errors;
    if(!errors){
      this.errorMsg = [];
      return;
    }

    const errKeys = Object.keys(errors);
    this.errorMsg = errKeys.map(key => VALIDATE_MASSEGES[key])
  }
}
