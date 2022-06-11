import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import s from './HW10.module.css'

function HW10() {
  const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
  const dispatch = useDispatch()

  const setLoading = () => {
    dispatch(loadingAC())

    setTimeout(() => dispatch(loadingAC()), 10000)

    console.log('loading...')
  }

  return (
    <div>
      <hr/>
      homeworks 10

      {/*should work (должно работать)*/}
      <div className={s.HW10Wrapper}>{loading
        ? (
          <div className={s.loader}>
            <span className={s.one}></span>
            <span className={s.two}></span>
            <span className={s.three}></span>
            <span className={s.four}></span>
          </div>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }</div>

      {/*<hr/>*/}
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
