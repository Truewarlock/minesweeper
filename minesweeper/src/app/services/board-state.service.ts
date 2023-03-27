import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardStateService {

  constructor() { }

  boardState:any[]=[
    [false,false,true,false,false,false,false,false,false,false],
    [false,true,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false],
  ]


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

  revealAllBombs:EventEmitter<void>=new EventEmitter<void>;

  gameOver(){
    this.revealAllBombs.next()
  }

/*
  calculateNeighbour(x:number,y:number){
    let neighbourBombs:number=0;

    if(x!=0){
      if(y!=0){
        if(this.boardState[x-1][y-1])
          neighbourBombs+=1
      }

      if(this.boardState[x-1][y])
        neighbourBombs+=1

      if(this.boardState[x-1][y+1])
        neighbourBombs+=1

    }

    if(y<=this.boardState[0].length){
      if(x<=this.boardState.length){
        if(this.boardState[x+1][y+1])
          neighbourBombs+=1
      }
      if(this.boardState[x][y+1])
        neighbourBombs+=1

    }

    if(x<=this.boardState.length){
      if(y>0){
        if(this.boardState[x+1][y-1]){
          neighbourBombs+=1;
        }
      }

      if(this.boardState[x+1][y]){
        neighbourBombs+=1
      }
    }

    if(y>0){
      if(this.boardState[x][y-1]){
        neighbourBombs+=1;
      }
    }

    return neighbourBombs
  }*/
}
