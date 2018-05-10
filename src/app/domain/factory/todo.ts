import { v4 as uuid } from 'uuid';
import {Todo, TodoItem} from "../todo";
import {Injectable} from "@angular/core";

@Injectable()
export class TodoFactory {
  static create(): Todo {
    return {
      id: `todo/${uuid()}`,
      title: "This is a very important title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac blandit odio. Aliquam erat volutpat. Nulla sit amet mauris convallis, vulputate ligula et, efficitur odio. Fusce tincidunt maximus ante, nec tristique lectus posuere nec. ",
      creationDate: new Date(),
      todoItems: [
        TodoItemFactory.create(),
        TodoItemFactory.create(),
        TodoItemFactory.create(),
        TodoItemFactory.create(),
        TodoItemFactory.create(),
        TodoItemFactory.create(),
        TodoItemFactory.create(),
        TodoItemFactory.create()
      ]
    }
  }
}

class TodoItemFactory {
  static create(): TodoItem {
    return {
      label: "Awesome label",
      done: TodoItemFactory.randomBool()
    }
  }

  static randomBool() {
    return Math.floor(Math.random() * 999) % 2 === 0;
  }
}
