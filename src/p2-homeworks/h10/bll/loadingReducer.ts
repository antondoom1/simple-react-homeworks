type InitStateType = typeof initState

const initState = {
  isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: loadingACType): InitStateType => {
  switch (action.type) {
    case 'CHANGE-LOADING-STATUS': {
      return {
        ...state,
        isLoading: !state.isLoading
      }
    }
    default:
      return state
  }
}

type loadingACType = { type: 'CHANGE-LOADING-STATUS' }
export const loadingAC = (): loadingACType => ({
  type: 'CHANGE-LOADING-STATUS'
})