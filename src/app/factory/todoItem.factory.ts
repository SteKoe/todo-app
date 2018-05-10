import {Injectable} from "@angular/core";
import {v4 as uuid} from "uuid";
import {TodoItem} from "../domain/todoItem";

@Injectable()
export class TodoItemFactory {
  static create(): TodoItem {
    let todoItem = new TodoItem();
    todoItem.id = `todo/${uuid()}`;
    todoItem.done = false;
    todoItem.creationDate = new Date();
    return todoItem;
  }
}
