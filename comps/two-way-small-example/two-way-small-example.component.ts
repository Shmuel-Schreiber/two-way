import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-small-example',
  templateUrl: './two-way-small-example.component.html',
  styleUrls: ['./two-way-small-example.component.css']
})
export class TwoWaySmallExampleComponent implements OnInit {
  myInputValue:string;
  constructor() { }

  ngOnInit() {
  }

}
