import React, { useState } from 'react';
import api from '../API'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  console.log(api.users.fetchAll())
  
  function deleteUser(idUser) {
    console.log(idUser)
    setUsers(users.filter((user) => {
      return user._id !== idUser
    }))
  }

  function getqualities(qualities) {
    qualities.map((qual) => {
      return <span>qual.name</span>
    })
  }

  return ( 
    <>
    <h1>Users</h1> 
    <span className='badge bg-primary' style={{padding: '10px 20px'}}>{users.length} чел тусанет с тобой сегодня.</span>
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Проффесия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{getqualities(user.qualities)}</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td><button onClick={() => deleteUser(user._id)} className='btn bg-danger' style={{color: 'white'}}>delete</button></td>
              </tr>
            )
          })}
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
    </>
  );
}
 
export default Users;