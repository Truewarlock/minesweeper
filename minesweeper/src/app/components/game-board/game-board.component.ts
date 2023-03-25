import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  height:number[]=[1,2,3,4,5,6,7,8];
  lenght:number[]=[1,2,3,4,5,6,7,8,9,10]


}
