import { Injectable } from '@angular/core';

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
  }
}
