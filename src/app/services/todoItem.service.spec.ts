import { TestBed, inject } from '@angular/core/testing';

import { TodoItemService } from './todoItem.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoItemService]
    });
  });

  it('should be created', inject([TodoItemService], (service: TodoItemService) => {
    expect(service).toBeTruthy();
  }));
});
