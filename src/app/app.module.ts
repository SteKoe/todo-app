import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoTileComponent} from './components/todo-tile/todo-tile.component';
import {TodoFactory} from "./domain/factory/todo";

@NgModule({
  declarations: [
    AppComponent,
    TodoTileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    TodoFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
