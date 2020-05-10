import { TodoItemModel } from './model/TodoItemModel.js';
import { TodoListModel } from './model/TodoListModel.js';
import { element, render } from './view/html-util.js';

export class App {
  constructor() {
    this.todoListModel = new TodoListModel();
  }
  mount() {
    const formElement = document.querySelector('#js-form');
    const inputElement = document.querySelector('#js-form-input');
    const containerElement = document.querySelector('#js-todo-list');
    const todoItemCountElement = document.querySelector('#js-todo-count');

    this.todoListModel.onChange(() => {
      const todoListElement = element`<ul />`;
      const todoItems = this.todoListModel.getTodoItems();
      todoItems.forEach(todoItem => {
        const todoItemElement = todoItem.completed
          ? element`<li><input type="checkbox" class="checkbox" checked><s>${todoItem.title}</s></input></li>`
          : element`<li><input type="checkbox" class="checkbox">${todoItem.title}</input></li>`;
        const inputCheckboxElement = todoItemElement.querySelector('.checkbox');
        inputCheckboxElement.addEventListener('change', () => {
          this.todoListModel.updateTodo({
            id: todoItem.id,
            completed: !todoItem.completed
          });
        });
        todoListElement.appendChild(todoItemElement);
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
