import { defaultStateInerface } from '../interface/todoList'
import { SET_TODULIST_INPUT_VALUE, SET_TODULIST_LIST } from './action'
const defaultState: defaultStateInerface = {
  todoList: {
    inputValue: '',
    list: [
      '在8点开晨会，分配今天的任务代码，',
      '在9点开晨会，分配今天的任务代码，',
      '在10点开晨会，分配今天的任务代码，',
    ]
  }
}

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case SET_TODULIST_INPUT_VALUE:
      return Object.assign({}, state, {
        todoList: {
          ...state.todoList,
          inputValue: action.value
        }
      })
    case SET_TODULIST_LIST:
      console.log(222)
      if (action.value === '') return state;
      console.log(1111)
      return Object.assign({}, state, {
        todoList: {
          ...state.todoList,
          list: [...state.todoList.list, action.value]
        }
      })
  }
  return state
}
export default reducer;