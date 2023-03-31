import { Component, Input, OnInit } from '@angular/core';
import { BoardStateService } from 'src/app/services/board-state.service';

@Component({
  selector: 'mine-field',
  templateUrl: './mine-field.component.html',
  styleUrls: ['./mine-field.component.css']
})
export class MineFieldComponent implements OnInit {

  @Input() x: number = 0;
  @Input() y: number = 0;

  constructor(public boardStateService: BoardStateService) {
  }

  ngOnInit(): void {
    this.boardStateService.revealAllBombs.subscribe(() => {
      if (this.revealState == false && this.boardStateService.boardState[this.x][this.y])
        this.revealMine()
    })
  }

  unrevealed: boolean = true;
  revealState: boolean = false;

  numberOfNeighbourBombs: number = 0;

  revealMine() {
    if (!this.markedAsMine) {
      this.unrevealed = false;
      this.numberOfNeighbourBombs = this.boardStateService.calculateNeighbour(this.x, this.y);

      if (this.boardStateService.boardState[this.x][this.y]) {
        this.revealState = true
        this.boardStateService.gameOver()
      }
    }
  }

  markedAsMine: boolean = false;
  markAsMine(event: any) {
    if (this.unrevealed) {
      event.preventDefault()
      console.log("Marked as mine:", this.x, this.y)
      this.markedAsMine = !this.markedAsMine;
    }

  }

}
