import {Injectable} from '@angular/core';
import {TodoItem} from "../domain/todoItem";

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  todos = [];

  constructor() {
  }

  save(todo: TodoItem) {
    todo.creationDate = new Date();
    localStorage.setItem(todo.id, JSON.stringify(todo));
  }

  findById(id: string): TodoItem {
    return JSON.parse(localStorage.getItem(id));
  }

  findAll(): TodoItem[] {
    const todos = [];

    for (var i = 0; i < localStorage.length; i++) {
      // do something with localStorage.getItem(localStorage.key(i));
      let key = localStorage.key(i);
      if (key.indexOf("todo/") === 0) {
        let todoItemSerialized = JSON.parse(localStorage.getItem(key));
        todoItemSerialized.creationDate = new Date(todoItemSerialized.creationDate);
        todos.push(todoItemSerialized);
      }
    }

    todos.sort((a, b) => {
      return b.creationDate - a.creationDate;
    });

    return todos;
  }
}
