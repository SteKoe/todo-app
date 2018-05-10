import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TodoTileComponent} from './components/todo-tile/todo-tile.component';
import {TodoFactory} from "./domain/factory/todo";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TodoTileHeaderComponent } from './components/todo-tile/todo-tile-header/todo-tile-header.component';
import { TodoTileTodoitemComponent } from './components/todo-tile/todo-tile-todoitem/todo-tile-todoitem.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoTileComponent,
    TodoTileHeaderComponent,
    TodoTileTodoitemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
