import TodoStore from '../stores/TodoStore';

function TodoItem({ no, todo, handleEdit }) {

  function handledelteteTask() {
    TodoStore.removeTodo(todo.id)
  }

  return (
    <tr>
      <th>{no}</th>
      <td>{todo.title}</td>
      <td>
        <button type="button" className="btn btn-info btn-sm " onClick={() => handleEdit(todo.id)}>Edit</button>
        <button type="button" className="btn btn-warning btn-sm delete" onClick={handledelteteTask}>Delete</button>
      </td>
    </tr>
  )
}

export default TodoItem;
