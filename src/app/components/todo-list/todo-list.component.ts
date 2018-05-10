import {Component, Input} from '@angular/core';
import {TodoItem} from "../../domain/todoItem";
import {TodoItemStore} from "../../services/todoItem.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(private todoItemStore : TodoItemStore){}

  toggle(todoItem : TodoItem): void {
    todoItem.done = !todoItem.done;
    this.todoItemStore.update(todoItem);
  }
}
