import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid'

export type UserType = {
  _id: string
  name: string
}

function HW3() {
  const [users, setUsers] = useState<UserType[]>([])

  const addUserCallback = (name: UserType['name']) => {
    setUsers([{_id: v1(), name}, ...users])
  }

  return (
    <div>
      <hr/>
      homeworks 3

      <GreetingContainer users={users} addUserCallback={addUserCallback}/>

      {/*<hr/>*/}
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr/>
    </div>
  )
}

export default HW3
