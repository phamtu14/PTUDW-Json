import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const UserId = () => {
  const [id, setId] = useState('')

  const handleId = e => {
    setId(e.target.value)
  }

  const handleClick = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res =>   document.getElementById('userName').innerHTML = res.data.name)
    .catch(err => console.error(err)) 

   
  }

  return (
    <div>
        <div>
    <h2>Get user by id</h2>
    <div>
        <span>UserId:</span>
        <input type="text" onChange={e => handleId(e)}/>
        <button onClick={() => handleClick()}><span>get User</span></button>
    </div>
    <div id='userName'></div>
</div>
    </div>
  )
}

export default UserId