import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

type AffairsPropsType = {
  filter: FilterType
  data: Array<AffairType>
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const filterHandler = (filter: FilterType) => () => props.setFilter(filter)

  const addActiveButtonClassname = (filter: FilterType) => {
    return props.filter === filter ? s.active : ''
  }

  return (
    <div className={s.wrapper}>

      <div className={s.mappedAffairs}>

        {
          mappedAffairs.length > 0
            ? mappedAffairs
            : <span>No tasks in the list</span>
        }

      </div>

      <div className={s.filterButtons}>
        <SuperButton
          className={addActiveButtonClassname('all')}
          onClick={filterHandler('all')}>All
        </SuperButton>
        <SuperButton
          className={addActiveButtonClassname('high')}
          onClick={filterHandler('high')}>High
        </SuperButton>
        <SuperButton
          className={addActiveButtonClassname('middle')}
          onClick={filterHandler('middle')}>Middle
        </SuperButton>
        <SuperButton
          className={addActiveButtonClassname('low')}
          onClick={filterHandler('low')}>Low
        </SuperButton>
      </div>

    </div>
  )
}

export default Affairs
