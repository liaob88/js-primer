let todoIndex = 0;

export class TodoItemModel {
  /**
   * @param {string} title Todoのアイテムのタイトル
   * @param {boolean} completed Todoアイテムが完了済みならばtrue,そうでないならfalse
   */
  constructor({ title, completed }) {
    this.id = todoIndex++;
    this.title = title;
    this.completed = completed;
  }
}
