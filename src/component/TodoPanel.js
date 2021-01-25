import TodoItem from '../component/TodoItem'
import TodoStore from '../stores/TodoStore';
import { observer } from "mobx-react"
import { STATUS } from '../constants/index'

function TodoPanel({ handleEdit }) {
  const renderTodoItems = (status) => {
    let no = 0
    return TodoStore.arrTaskList.map((todo, index) => {
      if (todo.status === status) {
        no++;
        return <TodoItem key={todo.id} no={no} todo={todo} handleEdit={handleEdit} />
      }
    })
  }

  return (
    <div className="row">
      <div className="hello">
        <h1>Welcome to ToDoLisk</h1>
      </div>
      <div className="col-4 table-bordered " >
        <table className="table">
          <thead className="thead-dark">
            <tr className="tr-doing">
              <th scope="col">No.</th>
              <th scope="col">New Task</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {renderTodoItems(STATUS.NEW)}
          </tbody>
        </table>
      </div>
      <div className="col-4 table-bordered " >
        <table className="table">
          <thead className="thead-dark">
            <tr className="tr-new">
              <th scope="col">No.</th>
              <th scope="col">Doing Task</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {renderTodoItems(STATUS.DOING)}
          </tbody>
        </table>
      </div>
      <div className="col-4  table-bordered " >
        <table className="table">
          <thead className="thead-dark">
            <tr className="tr-done">
              <th scope="col">No.</th>
              <th scope="col">Done Task</th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {renderTodoItems(STATUS.DONE)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default observer(TodoPanel);