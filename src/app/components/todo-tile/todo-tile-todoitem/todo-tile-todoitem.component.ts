import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../../../domain/todo";

@Component({
  selector: 'app-todo-tile-todoitem',
  templateUrl: './todo-tile-todoitem.component.html',
  styleUrls: ['./todo-tile-todoitem.component.scss']
})
export class TodoTileTodoitemComponent {
  @Input()
  todoItem: TodoItem;

  @Output()
  onChange: EventEmitter<any> = new EventEmitter();

  onModelChange() {
      this.onChange.emit();
  }
}
