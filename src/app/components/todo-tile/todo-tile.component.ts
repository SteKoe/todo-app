import {Component, Input} from '@angular/core';
import {Todo} from "../../domain/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-tile',
  templateUrl: './todo-tile.component.html',
  styleUrls: ['./todo-tile.component.scss']
})
export class TodoTileComponent {

  @Input()
  public todo: Todo;

  constructor(private todoService : TodoService) {
  }

  saveChange(): void {
    this.todoService.save(this.todo);
  }
}
