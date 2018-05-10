import {Injectable} from '@angular/core';
import {Todo} from "../domain/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [];

  constructor() {
  }

  save(todo: Todo) {
    localStorage.setItem(todo.id, JSON.stringify(todo));
  }

  findById(id: string): Todo {
    return JSON.parse(localStorage.getItem(id));
  }

  findAll(): Todo[] {
    const todos = [];

    for (var i = 0; i < localStorage.length; i++) {
      // do something with localStorage.getItem(localStorage.key(i));
      let key = localStorage.key(i);
      if(key.indexOf("todo/") === 0) {
        todos.push(JSON.parse(localStorage.getItem(key)));
      }
    }

    return todos;
  }
}
