import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  names: string[];

  constructor() { 
    this.names = ['a', 'b', 'c', 'd'];
  }

  ngOnInit() {
  }

}
