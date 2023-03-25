import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mine-field',
  templateUrl: './mine-field.component.html',
  styleUrls: ['./mine-field.component.css']
})
export class MineFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  unrevealed:boolean=true;
  isBomb:boolean=false;
  revealState:boolean=false;

  revealMine(){
    this.unrevealed=false;
    if(this.isBomb)
      this.revealState=true
  }

}
