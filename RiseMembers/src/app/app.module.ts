import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HexagonGridComponent } from './hexagon-grid/hexagon-grid.component';
import { HexComponent } from './hex/hex.component';

@NgModule({
  declarations: [
    AppComponent,
    HexagonGridComponent,
    HexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
