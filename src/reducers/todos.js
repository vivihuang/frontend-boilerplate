import { handleActions } from 'redux-actions'

const initialState = [{
  id: 0,
  text: 'Use Redux'
}]

export default handleActions({
  'add todo': (state, action) => [...state, {
    id: state[state.length - 1].id + 1,
    text: action.payload
  }]
}
, initialState)
