import { defaultStateInerface } from '../interface/todoList'
import { SET_TODULIST_INPUT_VALUE, SET_TODULIST_LIST, DELETE_TODULIST_LIST } from './action'
import _ from 'lodash'
const defaultState: defaultStateInerface = {
  todoList: {
    inputValue: '',
    list: [
      'ZW摸奶第一式',
      'ZC三连第一式',
      'JD到处找基波',
    ]
  }
}
const reducer = (state = defaultState, action: any) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case SET_TODULIST_INPUT_VALUE:
      return Object.assign({}, state, {
        todoList: {
          ...state.todoList,
          inputValue: action.value
        }
      })
    case SET_TODULIST_LIST:
      {
        if (action.value === '') return newState;
        const { list } = newState.todoList;
        if (list.includes(action.value)) return newState
        list.push(action.value);
        return newState
      }
    case DELETE_TODULIST_LIST: {
      const { list } = newState.todoList;
      list.splice(action.value, 1);
      return newState
    }
  }
  return state
}
export default reducer;