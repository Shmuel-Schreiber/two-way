import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-super-input',
  templateUrl: './super-input.component.html',
  styleUrls: ['./super-input.component.css']
})
export class SuperInputComponent implements OnInit {
  
  @Input() superValue:string = '';

  @Output() superValueChange = new EventEmitter()

  inputChange(term:string){
    this.superValueChange.emit(term)
  }

  constructor() { }

  ngOnInit() {
  }

}
