import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-i-change-you',
  templateUrl: './i-change-you.component.html',
  styleUrls: ['./i-change-you.component.css']
})
export class IChangeYouComponent implements OnInit {

  @Input() newValue;
  constructor() { }

  ngOnInit() {
  }

}
