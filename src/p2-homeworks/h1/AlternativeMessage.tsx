import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Message.module.css'
import Message, {MessagePropsType} from './Message'

function AlternativeMessage() {
  const [arr, setArr] = useState<Array<MessagePropsType>>([{
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'Some Text',
    time: new Date().toLocaleTimeString('ru-Ru', {
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  ])
  const [value, setValue] = useState<string>('')

  const mappedMessage = arr.map(m => {
    return (
      <Message
        key={m.message}
        avatar={m.avatar}
        name={m.name}
        message={m.message}
        time={m.time}
      />
    )
  })

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value)
  }
  const onClickButtonHandler = () => {
    if (!!value.trim()) {
      setArr([
        ...arr,
        {
          avatar: arr[0].avatar,
          name: arr[0].name,
          message: value,
          time: arr[0].time
        }
      ])
    }
    setValue('')
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.keyCode === 13 && e.ctrlKey) {
      onClickButtonHandler()
    }
  }

  return (
    <div>

      {mappedMessage}

      <div className={s.inputSection}>
        <form className={s.decor}>
          <div className={s.formInner}>
            <textarea
              placeholder={'Enter your message...'}
              value={value}
              onChange={onChangeTextAreaHandler}
              onKeyDown={onKeyDownHandler}/>
            <button type="button" onClick={onClickButtonHandler}>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AlternativeMessage

