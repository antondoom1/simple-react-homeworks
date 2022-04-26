import React from 'react'
import {AffairType} from './HW2'
import s from './Affairs.module.css'
import b from './../h4/common/c2-SuperButton/SuperButton.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairPropsType = {
  affair: AffairType
  deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
  const {_id, name, priority} = props.affair

  const priorityTextColor = {
    color: priority === 'high' ? 'red' :
      priority === 'middle' ? '#ff9900' :
        'green'
  }

  const deleteCallback = () => props.deleteAffairCallback(_id)

  return (
    <table className={s.table}>
      <tbody>
      <tr>
        <td>{name}</td>
        <td style={priorityTextColor}>
          [{priority}]
        </td>
        <td>
          <SuperButton className={b.red} onClick={deleteCallback}>
            x
          </SuperButton>
        </td>
      </tr>
      </tbody>
    </table>
  )
}

export default Affair
