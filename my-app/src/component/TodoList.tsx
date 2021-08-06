// 类库资源
import { Input, Button, List } from 'antd';
import { useEffect, useState } from 'react';
import styled from '../assets/TodoList.module.scss';
import store from '../store';
import { actionInterface } from '../interface/todoList';
import { SET_TODULIST_INPUT_VALUE } from '../store/action';
import { addListAxtion } from '../store/action-creater'

export default function TodoList() {
  //定义数据
  const [todoList, setTodoList] = useState([] as string[]);
  const [inputValue, setInputValue] = useState('');

  // 初始化数据
  useEffect(() => {
    store.subscribe(listenersStoreChange)
    setTodoList(store.getState().todoList.list);
  }, [])

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
    setInputValue(store.getState().todoList.inputValue);
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