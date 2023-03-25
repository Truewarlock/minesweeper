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
}
