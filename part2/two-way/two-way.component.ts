import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  myVal:string="";
  updateVal(e){
    this.myVal = e;
  }
  constructor() { }

  ngOnInit() {
  }

}
