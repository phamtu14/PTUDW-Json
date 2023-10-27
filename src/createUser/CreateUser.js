import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [id, setId] = useState('')
  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  
  const handleChangeBody = e => {
    setBody(e.target.value)
  }

  const createUser = () => {
    const user = [title, body]

    axios.post('https://jsonplaceholder.typicode.com/posts', user)
    .then(res => setId(res.status))
    .catch(err => console.log(err))
    
  }


  return (
    <>
    <div className="createUser">
      <h2>Create User</h2>
      <div>
          <span>Title:</span>
          <input type="text" onChange={e =>handleChangeTitle(e)}/>
          <span>Body:</span>
          <input type="text" onChange={e =>handleChangeBody(e)}/>
          <button onClick={() => createUser()}><span>Create Post</span></button>
      </div>
      <div id='id'>{id}</div>
    </div>
    </>
  )
}

export default CreateUser