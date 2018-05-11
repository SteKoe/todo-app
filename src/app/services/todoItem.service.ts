import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Injectable} from "@angular/core";
import {TodoItem} from "../domain/todoItem";
import {Observable} from "rxjs/internal/Observable";
import {of} from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class TodoItemStore {

  private _todos: BehaviorSubject<Array<TodoItem>> = new BehaviorSubject([]);

  constructor() {
    this.loadInitialData();
  }

  get todos() {
    return of(this._todos.getValue());
  }

  private _saveToLocalStorage(todo: TodoItem): Observable<TodoItem[]> {
    todo.modifyDate = new Date();
    localStorage.setItem(todo.id, JSON.stringify(todo));
    return of([todo]);
  }

  private _loadFromLocalStorage(): Observable<TodoItem[]> {
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

    return of(todos);
  }

  loadInitialData() {
    this._loadFromLocalStorage()
      .subscribe(
        res => {
          let todos = (<Object[]>res).map((todo: any) => {

            const todoItem = new TodoItem();
            todoItem.id = todo.id;
            todoItem.label = todo.label;
            todoItem.creationDate = todo.creationDate;
            todoItem.done = todo.done;
            return todoItem;
          });
          this._todos.next(todos);
        },
        err => console.log("Error retrieving TodoItems")
      );
  }

  addTodoItem(newTodoItem: TodoItem): Observable<TodoItem[]> {
    let obs = this._saveToLocalStorage(newTodoItem);

    obs.subscribe(
      res => {
        let value = this._todos.getValue();
        value.push(newTodoItem);
        this._todos.next(value);
      });

    return obs;
  }

  update(toggled: TodoItem): Observable<TodoItem[]> {
    let obs = this._saveToLocalStorage(toggled);

    obs.subscribe(
      res => {
        let todos = this._todos.getValue();
        let index = todos.findIndex((todo: TodoItem) => todo.id === toggled.id);
        todos[index] = toggled;
        this._todos.next(todos);
      }
    );

    return obs;
  }

  clearAll() {
    localStorage.clear();

    this._todos.getValue().length = 0;

    return of(this._todos.getValue());
  }
}
