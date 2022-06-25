import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox'
import {requestsAPI} from './api/RequestsAPI'
import s from './Request.module.css'

export const Request = () => {
  const [response, setResponse] = useState('')
  const [checked, setChecked] = useState(false)

  const testRequest = () => {
    requestsAPI.testRequest(checked)
      .then(data => {
        console.log(data)
        setResponse('THE JOB IS DONE--->>>CHECK LOG...')
      })
      .catch(err => {
        console.log({...err})
        console.log(err.response ? err.response.data.errorText : err.message)
        setResponse('ERROR IMITATION--->>>CHECK LOG...')
      })
  }

  return (
    <div className={s.wrapper}>

      <SuperCheckbox checked={checked} onChangeChecked={setChecked}/>

      <SuperButton onClick={testRequest}>Request...</SuperButton>

      <div style={{textAlign: 'center'}}>{response}</div>

    </div>
  )
}

