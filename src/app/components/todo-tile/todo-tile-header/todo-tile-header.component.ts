import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../../domain/todo";

@Component({
  selector: 'app-todo-tile-header',
  templateUrl: './todo-tile-header.component.html',
  styleUrls: ['./todo-tile-header.component.scss']
})
export class TodoTileHeaderComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
