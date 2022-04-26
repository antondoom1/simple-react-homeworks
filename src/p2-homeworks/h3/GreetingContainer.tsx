import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: UserType['name']) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
  const [name, setName] = useState<UserType['name']>('')
  const [error, setError] = useState<boolean>(true)

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    const trimmedName = e.currentTarget.value.trim()
    if (trimmedName) {
      setName(trimmedName)
      error && setError(false)
    } else {
      name && setName('')
      setError(true)
    }
  }

  const addUser = () => {
    addUserCallback(name)
    alert(`Hello ${name}!`)
    setName('')
  }

  const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && name) {
      addUser()
    }
  }

  const totalUsers = users.length

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
      onEnterPress={onEnterPress}
    />
  )
}

export default GreetingContainer
