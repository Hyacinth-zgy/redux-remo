// 类库资源
import { Input, Button, List } from 'antd';
import { useEffect, useState } from 'react';
import styled from '../assets/TodoList.module.scss';
import store from '../store'

console.log(styled)
// 函数组件
export default function TodoList() {
  //定义数据
  const [dataList, setData] = useState([] as string[]);
  // 初始化数据
  useEffect(() => {
    setData(store.getState().todoList.list)
    console.log(store.getState())
  }, [])
  return <div className={styled.todolist} >
    <div className={styled.data}>
      <div className={styled['input-wrap']}>
        <Input placeholder='Write Something' className={styled.input} />
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