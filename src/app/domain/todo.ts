export interface Todo {
  id: string,
  title: string;
  description: string;
  creationDate: Date;
  todoItems: TodoItem[];
}

export interface TodoItem {
  label: string;
  done: boolean;
}
