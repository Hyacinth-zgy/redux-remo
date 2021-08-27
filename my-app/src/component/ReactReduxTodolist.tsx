import { Input, Button, List } from 'antd';
import { useEffect, useState } from 'react';
import store from '../store';
import styled from '../assets/TodoList.module.scss';
import { defaultStateInerface } from '../interface/todoList';
import { connect } from 'react-redux';
interface Props {
  inputValue: string
}

function ReactReduxTodolist(props: Props = {} as Props) {
  let [data, setData] = useState({} as defaultStateInerface)
  useEffect(() => {
    setData(store.getState())
    console.log(data)
  }, [data])
  return (
    <div className={styled.todolist}>
      <div className={styled.data}>
        <span>搜索关键词:{props.inputValue}</span>
        <div className={styled['input-wrap']}>
          <Input placeholder='Write Something' className={styled.input} value={props.inputValue} />
          <Button type="primary" className={styled['add-btn']}>ADD</Button>
        </div>
        <div className={styled['data-wrap']}>
          <List bordered dataSource={[]} renderItem={(item, index) => {
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
    inputValue: state.todoList.inputValue
  }
}

export default connect(stateToProps, null)(ReactReduxTodolist)