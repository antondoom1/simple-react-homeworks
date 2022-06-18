import React from 'react'
import s from './HW12.module.css'
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../h10/bll/store'
import {changeToDarkThemeAC, changeToRedThemeAC, changeToLimeThemeAC, ThemesType} from './bll/themeReducer'

const themes = ['dark', 'red', 'lime']

function HW12() {
  const theme = useSelector<AppStoreType, ThemesType>(state => state.theme.currentTheme)

  const dispatch = useDispatch()

  const onChangeCallback = (value: string) => {
    if (value === 'dark') dispatch(changeToDarkThemeAC(value))
    if (value === 'red') dispatch(changeToRedThemeAC(value))
    if (value === 'lime') dispatch(changeToLimeThemeAC(value))
  }

  return (
    <div className={s[theme]}>

      <span className={s[theme + '-text']}>
        homeworks 12
      </span>

      <div className={s.radio}>

        <span className={s[theme + '-text']}>Choose a color theme...</span>

        <SuperRadio
          options={themes}
          value={theme}
          onChangeOption={onChangeCallback}/>

      </div>

      <hr/>
    </div>
  )
}

export default HW12
