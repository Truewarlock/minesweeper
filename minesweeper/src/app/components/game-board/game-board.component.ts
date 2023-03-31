import { Component, OnInit } from '@angular/core';
import { BoardStateService } from 'src/app/services/board-state.service';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  constructor(public boardState: BoardStateService) { }

  ngOnInit(): void {
  }




}
