import {UserType} from '../HW8'

export const homeWorkReducer = (state: UserType[], action: homeWorkReducerActionsType): UserType[] => {
  switch (action.type) {
    case 'sort': {
      return [...state.sort((a, b) => action.payload === 'up'
        ? a.name > b.name ? 1 : -1
        : a.name < b.name ? 1 : -1
      )]
    }
    case 'check': {
      return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
        .filter(s => s.age > action.payload)
    }
    default:
      return state
  }
}

type homeWorkReducerActionsType = SortACType | CheckACType

type payloadSortACType = 'up' | 'down'
type SortACType = ReturnType<typeof sortAC>
const sortAC = (payload: payloadSortACType) => {
  return {
    type: 'sort',
    payload
  } as const
}

type CheckACType = ReturnType<typeof checkAC>
const checkAC = (payload: number) => {
  return {
    type: 'check',
    payload
  } as const
}