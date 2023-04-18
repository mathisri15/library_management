import { Component,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'defalt-button',
  templateUrl: './defalt-button.component.html',
  styleUrls: ['./defalt-button.component.css']
})
export class DefaltButtonComponent {
@Input()
type: 'submit' | 'button' = 'submit';
@Input()
text:string = 'Submit';
@Input()
bgColor = '#e72929';
@Input()
color = 'white'
@Input()
fontSizeRem = 1.3;
@Input()
widthRem = 12;
@Output()
onClick = new EventEmitter();

}
