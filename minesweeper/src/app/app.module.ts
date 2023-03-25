import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { MineFieldComponent } from './components/mine-field/mine-field.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    MineFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
