import { TodoItemView } from './TodoItemView.js';
import { element } from './html-util.js';

export class TodoListView {
  constructor() {}
  createListView(todoItems, { onUpdateTodo, onDeleteTodo }) {
    const todoListElement = element`<ul />`;
    todoItems.map(todoItem => {
      const todoItemView = new TodoItemView();
      const todoItemElement = todoItemView.createElement(todoItem, {
        onUpdateTodo,
        onDeleteTodo
      });
      todoListElement.appendChild(todoItemElement);
    });
    return todoListElement;
  }
}
