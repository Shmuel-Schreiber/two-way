import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-div',
  templateUrl: './my-div.component.html',
  styleUrls: ['./my-div.component.css']
})
export class MyDivComponent implements OnInit {

  val:string=""

  home(e:string){
    console.log(e);
    this.val=e
  }
  constructor() { }

  ngOnInit() {
  }

}
