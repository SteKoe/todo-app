import {inject, TestBed} from '@angular/core/testing';

import {TodoItemStore} from './todoItem.service';
import {TodoItemFactory} from "../factory/todoItem.factory";

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoItemStore]
    });
  });

  afterEach((inject([TodoItemStore], (service: TodoItemStore) => {
    service.clearAll();
  })));

  it('should clear all todos', inject([TodoItemStore], (service: TodoItemStore) => {
    service.addTodoItem(TodoItemFactory.create());

    service.todos.subscribe(todo => expect(todo.length).toBe(1));
    service.clearAll();
    service.todos.subscribe(todo => expect(todo.length).toBe(0));
  }));

  it('should be created', inject([TodoItemStore], (service: TodoItemStore) => {
    expect(service).toBeTruthy();
  }));

  it('should save new items', inject([TodoItemStore], (service: TodoItemStore) => {
    service.todos.subscribe(todo => expect(todo.length).toBe(0));
    service.addTodoItem(TodoItemFactory.create());
    service.todos.subscribe(todo => expect(todo.length).toBe(1));
  }));
});
