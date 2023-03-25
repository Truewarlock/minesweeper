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
  state:string="?"

  revealMine(){
    this.unrevealed=false;
    if(this.boardStateService.boardState[this.x-1][this.y-1])
      this.revealState=true
  }

}
