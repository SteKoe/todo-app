import {Component, EventEmitter} from '@angular/core';
import {TodoItemStore} from "./services/todoItem.service";
import {TodoItem} from "./domain/todoItem";
import {MatSelectionListChange} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
