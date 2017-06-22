import { MainStackNavigation } from '../../Navigation'
export const MainStackNavigationReducer = (state, action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index: action.payload.index }
  } else {
    return MainStackNavigation.router.getStateForAction(action, state) || state
  }
}
