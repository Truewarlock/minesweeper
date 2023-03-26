import { Component, Input, OnInit } from '@angular/core';
import { BoardStateService } from 'src/app/services/board-state.service';

@Component({
  selector: 'mine-field',
  templateUrl: './mine-field.component.html',
  styleUrls: ['./mine-field.component.css']
})
export class MineFieldComponent implements OnInit {

  @Input() x:number=0;
  @Input() y:number=0;

  constructor(public boardStateService: BoardStateService) {
  }

  ngOnInit(): void {

  }

  unrevealed:boolean=true;
  revealState:boolean=false;

  numberOfNeighbourBombs:number=0;

  revealMine(){
    if(!this.markedAsMine){
      this.unrevealed=false;
      this.numberOfNeighbourBombs=this.boardStateService.calculateNeighbour(this.x-1,this.y-1)
      if(this.boardStateService.boardState[this.x-1][this.y-1])
        this.revealState=true
    }
  }

  markedAsMine:boolean=false;
  markAsMine(event:any){
    event.preventDefault()
    console.log("Marked as mine:",this.x-1,this.y-1)
    this.markedAsMine=!this.markedAsMine;
  }

}
