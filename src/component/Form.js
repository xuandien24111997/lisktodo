import React, { useState, useEffect } from 'react';
import TodoStore from '../stores/TodoStore';
import { STATUS_OPTIONS, STATUS } from '../constants/index'


function Form({ id, resetId }) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState(STATUS.NEW)

  function generateUUID() {
    return Math.floor(new Date)
  }

  function handleSubmit() {
    if (!title.length || !status) return;

    const todo = {
      id: generateUUID(),
      title: title.trim(),
      status
    }

    if (id) {
      TodoStore.updateTodo(id, todo)
      resetId()
    } else {
      TodoStore.addTodo(todo)
    }


    // Xoa input
    setTitle('')
    setStatus(STATUS.NEW)
  }

  function renderStatusOptions() {
    return STATUS_OPTIONS.map((option, index) => (<option key={index} value={option.type}>{option.name}</option>))
  }

  useEffect(() => {
    if (id) {
      const index = TodoStore.arrTaskList.findIndex(todo => todo.id === id)
      setTitle(TodoStore.arrTaskList[index].title)
      setStatus(TodoStore.arrTaskList[index].status)
    }
  }, [id])

  return (
    <div className="card">
      <div>
        <div className="card-header">
          {id

            ? <div className="update">
              Update Task
            </div>

            : <div className="create">
              Create Task
          </div>}

        </div>
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Task name</label>
              <div className="col-sm-10">
                <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" className="form-control" placeholder="Add New Task " />
              </div>

            </div>
            <br></br>
            <div className="form-group row">
              <br></br>
              <label className="col-sm-2 col-form-label">Status</label>
              <div className="col-sm-10">
                <select className="form-control" value={status} onChange={(e) => { setStatus(e.target.value) }}>
                  {renderStatusOptions()}
                </select>
              </div>
            </div>
            <div>
              {id

                ? <div className="edit">
                  <br></br>
                  <label className="col-sm-2 col-form-label"></label>
                  <button disabled={!title.trim().length} type="button" className="btn btn-danger " onClick={handleSubmit}>Update</button>
                </div>
                : <div className="submit">
                  <br></br>
                  <label className="col-sm-2 col-form-label"></label>
                  <button disabled={!title.trim().length} type="button" className="btn btn-success " onClick={handleSubmit}>Submit</button>
                </div>}

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form;



