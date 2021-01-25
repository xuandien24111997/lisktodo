import React, { useState, } from 'react';
import TodoPanel from '../component/TodoPanel'
import Form from '../component/Form'

import TodoStore from '../stores/TodoStore';
import { observer } from "mobx-react"

function Home() {
  const [id, setId] = useState()

  function handleEdit(id) {
    setId(id)
  }

  return (
    <div className="container">
      <TodoPanel handleEdit={handleEdit} />
      <Form id={id} resetId={() => setId(null)} />
    </div>
  );
}

export default Home;
