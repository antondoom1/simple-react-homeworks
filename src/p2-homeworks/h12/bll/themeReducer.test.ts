import {changeToDarkThemeAC, changeToRedThemeAC, changeToLimeThemeAC, themeReducer} from './themeReducer'

let themes: {
  currentTheme: 'dark' | 'red' | 'lime'
}

beforeEach(() => {
  themes = {
    currentTheme: 'lime'
  }
})

test('dark theme should be accepted', () => {

  let acceptedTheme = themeReducer(themes, changeToDarkThemeAC('dark'))

  expect(themes.currentTheme).toStrictEqual('lime')
  expect(acceptedTheme.currentTheme).toStrictEqual('dark')

})

test('red theme should be accepted', () => {

  let acceptedTheme = themeReducer(themes, changeToRedThemeAC('red'))

  expect(themes.currentTheme).toStrictEqual('lime')
  expect(acceptedTheme.currentTheme).toStrictEqual('red')

})

test('lime theme should be accepted', () => {

  let acceptedTheme = themeReducer(themes, changeToLimeThemeAC('lime'))

  expect(themes.currentTheme).toStrictEqual('lime')
  expect(acceptedTheme.currentTheme).toStrictEqual('lime')

})