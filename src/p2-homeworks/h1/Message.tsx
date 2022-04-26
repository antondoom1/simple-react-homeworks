import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: MessagePropsType) {
  return (
    <div className={s.messageSection}>
      <div className={s.ava}><img src={props.avatar} alt={'ava'}/></div>
      <div className={s.mBody}>
        <div className={s.name}>{props.name}</div>
        <div className={s.message}>{props.message}</div>
        <div className={s.time}>{props.time}</div>
      </div>
    </div>
  )
}

export default Message





