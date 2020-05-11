import { TodoItemModel } from './model/TodoItemModel.js';
import { TodoListModel } from './model/TodoListModel.js';
import { render } from './view/html-util.js';
import { TodoItemView } from './view/TodoItemView.js';
import { TodoListView } from './view/TodoListView.js';

export class App {
  constructor() {
    this.todoListModel = new TodoListModel();
    this.todoListView = new TodoListView();
  }
  mount() {
    const formElement = document.querySelector('#js-form');
    const inputElement = document.querySelector('#js-form-input');
    const containerElement = document.querySelector('#js-todo-list');
    const todoItemCountElement = document.querySelector('#js-todo-count');

    this.todoListModel.onChange(() => {
      const todoItems = this.todoListModel.getTodoItems();
      const todoListView = new TodoListView();
      const todoListElement = todoListView.createListView(todoItems, {
        onUpdateTodo: ({ id, completed }) => {
          this.todoListModel.updateTodo({ id, completed });
        },
        onDeleteTodo: ({ id }) => {
          this.todoListModel.deleteTodo({ id });
        }
      });
      render(todoListElement, containerElement);
      todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
    });

    formElement.addEventListener('submit', event => {
      event.preventDefault();
      this.todoListModel.addTodo(
        new TodoItemModel({ title: inputElement.value, completed: false })
      );
      inputElement.value = '';
    });
  }
}
