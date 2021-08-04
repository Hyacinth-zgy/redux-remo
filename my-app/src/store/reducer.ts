import { defaultStateInerface } from '../interface/todoList'
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
    return state
}
export default reducer;