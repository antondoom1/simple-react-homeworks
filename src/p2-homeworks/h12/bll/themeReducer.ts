export type ThemesType = 'dark' | 'red' | 'lime'

type InitStateType = {
  currentTheme: ThemesType
}

const initState: InitStateType = {
  currentTheme: 'dark'
}

export const themeReducer = (state = initState, action: changeThemeAC): InitStateType => {
  switch (action.type) {
    case 'CHANGE-TO-DARK-THEME':
    case 'CHANGE-TO-RED-THEME':
    case 'CHANGE-TO-LIME-THEME': {
      return {
        ...state,
        currentTheme: action.value
      }
    }
    default:
      return state
  }
}

type changeThemeAC = {
  type: 'CHANGE-TO-DARK-THEME' | 'CHANGE-TO-RED-THEME' | 'CHANGE-TO-LIME-THEME'
  value: 'dark' | 'red' | 'lime'
}

export const changeToDarkThemeAC = (value: 'dark'): changeThemeAC => ({
  type: 'CHANGE-TO-DARK-THEME',
  value
})

export const changeToRedThemeAC = (value: 'red'): changeThemeAC => ({
  type: 'CHANGE-TO-RED-THEME',
  value
})

export const changeToLimeThemeAC = (value: 'lime'): changeThemeAC => ({
  type: 'CHANGE-TO-LIME-THEME',
  value
})