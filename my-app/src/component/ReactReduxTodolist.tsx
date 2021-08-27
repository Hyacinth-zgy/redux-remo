import { Input, Button, List } from 'antd';
import styled from '../assets/TodoList.module.scss';
import { actionInterface, defaultStateInerface } from '../interface/todoList';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { SET_TODULIST_INPUT_VALUE } from '../store/action';
import store from '../store';
import { addListAxtion } from '../store/action-creater';
interface Props {
  inputValue: string,
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  addListItem: () => void,
  list: string[]
}

function ReactReduxTodolist(props: Props = {} as Props) {
  return (
    <div className={styled.todolist}>
      <div className={styled.data}>
        <span>搜索关键词:{props.inputValue}</span>
        <div className={styled['input-wrap']}>
          <Input placeholder='Write Something' className={styled.input} value={props.inputValue} onChange={props.inputChange} />
          <Button type="primary" className={styled['add-btn']} onClick={props.addListItem}>ADD</Button>
        </div>
        <div className={styled['data-wrap']}>
          <List bordered dataSource={props.list} renderItem={(item, index) => {
            return <List.Item>
              <div className={styled['list-item-div']}>
                <span>{item}</span>
                <Button>删除</Button>
              </div>
            </List.Item>
          }} >
          </List>
        </div>
      </div>
    </div>
  )
}

const stateToProps = (state: defaultStateInerface) => {
  return {
    inputValue: state.todoList.inputValue,
    list: state.todoList.list
  }
}

const dispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    inputChange(e: React.ChangeEvent<HTMLInputElement>) {
      const action: actionInterface = {
        type: SET_TODULIST_INPUT_VALUE,
        value: e.target.value
      }
      dispatch(action)
    },
    addListItem() {
      const inputValue = store.getState().todoList.inputValue;
      console.log(inputValue)
      dispatch(addListAxtion(inputValue));
    }
  }
}

export default connect(stateToProps, dispatchToProps)(ReactReduxTodolist)