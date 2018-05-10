import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTileHeaderComponent } from './todo-tile-header.component';

describe('TodoTileHeaderComponent', () => {
  let component: TodoTileHeaderComponent;
  let fixture: ComponentFixture<TodoTileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
