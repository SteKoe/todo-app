import {Component} from '@angular/core';
import {TodoService} from "./services/todo.service";
import {Todo} from "./domain/todo";
import {TodoFactory} from "./domain/factory/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos : Todo[] = new Array(0);

  constructor(todoService: TodoService, todoFactory: TodoFactory) {
    this.todos = todoService.findAll();
  }
}
