import { defaultStateInerface } from '../interface/todoList'
import { SET_TODULIST_INPUT_VALUE } from './action'
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
          inputValue: action.value
        }
      })
  }
  return state
}
export default reducer;