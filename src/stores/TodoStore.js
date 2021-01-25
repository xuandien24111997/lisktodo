import { makeAutoObservable } from "mobx"

class TodoStore {
  arrTaskList = []

  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.arrTaskList.push(todo);
  }

  removeTodo(id) {
    this.arrTaskList = this.arrTaskList.filter(todo => todo.id !== id)
  }

  updateTodo(id, todo) {
    const index = this.arrTaskList.findIndex(todo => todo.id === id)

    const newTodos = [...this.arrTaskList]

    newTodos[index].title = todo.title
    newTodos[index].status = todo.status

    this.arrTaskList = newTodos
  }
}

const todoStore = new TodoStore()

export default todoStore;