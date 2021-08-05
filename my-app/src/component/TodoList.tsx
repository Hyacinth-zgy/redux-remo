// 类库资源
import { Input, Button, List } from 'antd';
import { useEffect, useState } from 'react';
import styled from '../assets/TodoList.module.scss';
import store from '../store'
import { actionInterface } from '../interface/todoList'
import { SET_TODULIST_INPUT_VALUE } from '../store/action'

console.log(styled)
// 函数组件
export default function TodoList() {
  //定义数据
  const [dataList, setData] = useState([] as string[]);
  const [inputValue, setInputValue] = useState('');

  // 初始化数据
  useEffect(() => {
    store.subscribe(listenersStoreChange)
    setData(store.getState().todoList.list);
    console.log(store.getState())
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

  const listenersStoreChange = () => {
    console.log(store.getState().todoList.inputValue)
    setInputValue(store.getState().todoList.inputValue)
  }

  // TODULIST 视图层
  return <div className={styled.todolist} >
    <div className={styled.data}>
      <span>搜索关键词:{inputValue}</span>
      <div className={styled['input-wrap']}>
        <Input placeholder='Write Something' className={styled.input} onChange={getInputValue} value={inputValue} />
        <Button type="primary" className={styled['add-btn']}>ADD</Button>
      </div>
      <div className={styled['data-wrap']}>
        <List bordered dataSource={dataList} renderItem={
          item => {
            return <List.Item>{item}</List.Item>
          }
        }>
        </List>
      </div>
    </div>
  </div>
}