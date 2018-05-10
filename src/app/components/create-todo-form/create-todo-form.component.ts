import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {TodoItem} from "../../domain/todoItem";
import {TodoItemFactory} from "../../factory/todoItem.factory";
import {TodoItemStore} from "../../services/todoItem.service";

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.scss']
})
export class CreateTodoFormComponent {
  todoItem: TodoItem = TodoItemFactory.create();

  todoItemFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private todoItemService : TodoItemStore) {}

  createTodoItem() {
    this.todoItem.creationDate = new Date();
    this.todoItemService.addTodoItem(this.todoItem);
    this.todoItem = TodoItemFactory.create();
  }
}
