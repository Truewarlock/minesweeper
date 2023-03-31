import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BoardStateService {

  constructor() { }

  getBoardHeight() {
    return this.boardState
  }
  getBoardLength() {
    return this.boardState[0]
  }

  boardState: any[] = [
    [false, false, true, false, false, false, false, false, false, false],
    [false, true, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ]

  boardWasRevealed:any[]=[
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],

  ]

  selectedDifficulty:any={name:"Easy",height:8,length:10,numberOfBombs:10}
  difficulties:any=[
    {name:"Easy",height:8,length:10,numberOfBombs:10},
    {name:"Medium",height:14,length:18,numbersOfBombs:40},
    {name:"Hard",height:20,length:24,numberOfBombs:99},
  ]

  selectDifficulty(difficultyType:number=this.selectedDifficulty){
    this.placedBombs=0
    this.selectedDifficulty=this.difficulties[difficultyType]
    const line=new Array(this.selectedDifficulty.length).fill(false);
    this.boardState=new Array(this.selectedDifficulty.height).fill(line);
    this.boardWasRevealed=new Array(this.selectedDifficulty.height).fill(line);
  }

  placedBombs:number=0;
  initMapWithBombs(){
    const numberOfBombsNeeded=this.selectedDifficulty.numberOfBombs;
    while(this.placedBombs<numberOfBombsNeeded){
      let x=Math.floor(Math.random() * this.selectedDifficulty.height)
      let y=Math.floor(Math.random() * this.selectedDifficulty.length)
      if(this.boardState[x][y]===false){
        this.boardState[x][y]=true;
        this.placedBombs+=1;
        console.log(x,y)
      }
    }
  }

  calculateNeighbour(x: number, y: number): number {
    let neighbourBombs = 0;
    const rows = this.boardState.length;
    const cols = this.boardState[0].length;

    // Check the left and upper-left cells
    if (x > 0 && y > 0 && this.boardState[x - 1][y - 1]) {
      neighbourBombs++;
    }

    // Check the cell directly above
    if (x > 0 && this.boardState[x - 1][y]) {
      neighbourBombs++;
    }

    // Check the right and upper-right cells
    if (x > 0 && y < cols - 1 && this.boardState[x - 1][y + 1]) {
      neighbourBombs++;
    }

    // Check the cell to the right
    if (y < cols - 1 && this.boardState[x][y + 1]) {
      neighbourBombs++;
    }

    // Check the bottom and lower-right cells
    if (x < rows - 1 && y < cols - 1 && this.boardState[x + 1][y + 1]) {
      neighbourBombs++;
    }

    // Check the cell directly below
    if (x < rows - 1 && this.boardState[x + 1][y]) {
      neighbourBombs++;
    }

    // Check the bottom and lower-left cells
    if (x < rows - 1 && y > 0 && this.boardState[x + 1][y - 1]) {
      neighbourBombs++;
    }

    // Check the cell to the left
    if (y > 0 && this.boardState[x][y - 1]) {
      neighbourBombs++;
    }

    return neighbourBombs;
  }

  revealEmptyNeighbours(x:number,y:number){
    this.revealEmptyCell.next([x+1,y+1])

  }

  revealEmptyCell: EventEmitter<[number,number]>=new EventEmitter<[number,number]>;

  revealAllBombs: EventEmitter<void> = new EventEmitter<void>;

  gameOver() {
    this.revealAllBombs.next()
  }
}
