import {Component, EventEmitter} from '@angular/core';
import {TodoItemService} from "./services/todoItem.service";
import {TodoItem} from "./domain/todoItem";
import {MatSelectionListChange} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoItems: TodoItem[] = new Array(0);

  constructor(todoItemService: TodoItemService) {
    this.todoItems = todoItemService.findAll();
  }
}
