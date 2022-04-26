import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from './HW3'

type GreetingPropsType = {
  name: UserType['name']
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: boolean
  totalUsers: number
  onEnterPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers, onEnterPress}
) => {
  const inputClass = error ? s.errorInput : s.input

  return (
    <div className={s.wrapper}>
      <form className={s.form}>
        <input
          value={name}
          onChange={setNameCallback}
          onBlur={setNameCallback}
          onKeyPress={onEnterPress}
          className={inputClass}
          placeholder={'Enter the name...'}/>
        <button className={s.button} onClick={addUser} disabled={!name}>
          <span>Add</span>
        </button>
        <span className={s.count}>{totalUsers}</span>
      </form>
    </div>
  )
}

export default Greeting
