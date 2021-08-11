// 类库资源
import { Input, Button, List } from 'antd';
import { useEffect, useState } from 'react';
import styled from '../assets/TodoList.module.scss';
import store from '../store';
import { actionInterface } from '../interface/todoList';
import { SET_TODULIST_INPUT_VALUE } from '../store/action';
import { addListAxtion } from '../store/action-creater'
import _ from 'lodash';
import { defaultStateInerface } from '../interface/todoList'

export default function TodoList() {
  //定义数据
  const [state, setState] = useState({} as defaultStateInerface);
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([] as string[]);

  // 初始化数据
  useEffect(() => {
    store.subscribe(listenersStoreChange)
    setState(store.getState());
  }, [])

  useEffect(() => {
    if (!_.isEqual(todoList, state?.todoList?.list)) {
      setTodoList(state?.todoList?.list)
    }
    if (inputValue !== state?.todoList?.inputValue) {
      setInputValue(state?.todoList?.inputValue)
    }
  }, [state])

  // React.ChangeEvent<HTMLInputElement>
  // React.FormEvent<HTMLInputElement>)
  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action: actionInterface = {
      type: SET_TODULIST_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }

  // store 仓库监听
  const listenersStoreChange = () => {
    setState(store.getState());
  }

  // 增加列表item
  const addListItem = () => {
    store.dispatch(addListAxtion(inputValue))
  }

  // TODULIST 视图层
  return <div className={styled.todolist} >
    <div className={styled.data}>
      <span>搜索关键词:{inputValue}</span>
      <div className={styled['input-wrap']}>
        <Input placeholder='Write Something' className={styled.input} onChange={getInputValue} value={inputValue} />
        <Button type="primary" className={styled['add-btn']} onClick={addListItem}>ADD</Button>
      </div>
      <div className={styled['data-wrap']}>
        <List bordered dataSource={todoList} renderItem={
          item => {
            return <List.Item>{item}</List.Item>
          }
        }>
        </List>
      </div>
    </div>
  </div>
}