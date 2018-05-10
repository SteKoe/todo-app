import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../domain/todo";

@Component({
  selector: 'app-todo-tile',
  templateUrl: './todo-tile.component.html',
  styleUrls: ['./todo-tile.component.scss']
})
export class TodoTileComponent  {

  @Input()
  public todo: Todo;

  constructor() { }

}
