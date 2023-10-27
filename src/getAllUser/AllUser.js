import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AllUser = () => {
  const [users, setUsers] = useState([])

  const getAllUsers = () => {
  
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data))
    .catch(err => console.error(err))
  }

  return (
    <div>
        <div className="allUser">
        <h2>All Users</h2>
        <button onClick={() => getAllUsers()}><span>Get All User</span></button>
        <tr>
                <th style={{marginRight: '30px'}}>Name</th>
                <th>Email</th>
              </tr>
        {
          users.map(user => {
            return <>
              <tr>
                <td style={{marginRight: '30px'}}>
                  {user.name}
                </td>
                <td>
                  {user.email}
                </td>
              </tr>
            </>
              
            
          })
        }
  </div>
    </div>
  )
}

export default AllUser