import React from 'react'
import img from './img/404.svg'
import s from './Error404.module.css'
import {Button} from '@material-ui/core'
import {PATH} from '../Pages'
import {NavLink} from 'react-router-dom'

function Error404() {
  return (
    <div className={s.errorPageWrapper}>
      <img src={img} alt="404"/>
      <div className={s.messageBlock}>
        <h2>Oh no! Where did you go?</h2>
        <p>We can’t seem to find the page you were looking for.</p>
        <NavLink to={PATH.PRE_JUNIOR}>
          <Button
            color={'primary'}
            variant={'contained'}
            className={s.button}
          >
            Go back to safety
          </Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Error404
