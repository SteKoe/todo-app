import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTileTodoitemComponent } from './todo-tile-todoitem.component';

describe('TodoTileTodoitemComponent', () => {
  let component: TodoTileTodoitemComponent;
  let fixture: ComponentFixture<TodoTileTodoitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTileTodoitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTileTodoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
