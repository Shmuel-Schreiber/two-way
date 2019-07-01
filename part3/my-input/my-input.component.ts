import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent implements OnInit {

  @Output() Val = new EventEmitter()

  updateVal(e){
    console.log(e);
    this.Val.emit(e)
  }

  constructor() { }

  ngOnInit() {
  }

}
