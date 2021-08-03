// 类库资源
import { Input, Button, List } from 'antd';
import Item from 'antd/lib/list/Item';
import styled from '../assets/TodoList.module.scss';
const data = [
  '在8点开晨会，分配今天的任务代码，',
  '在9点开晨会，分配今天的任务代码，',
  '在10点开晨会，分配今天的任务代码，',
]
console.log(styled)
// 函数组件
export default function TodoList() {
  return <div className={styled.todolist} >
    <div className={styled.data}>
      <div className={styled['input-wrap']}>
        <Input placeholder='Write Something' className={styled.input} />
        <Button type="primary" className={styled['add-btn']}>ADD</Button>
      </div>
      <div className={styled['data-wrap']}>
        <List bordered dataSource={data} renderItem={
          item => {
            return <List.Item>{item}</List.Item>
          }
        }>
        </List>
      </div>
    </div>
  </div>
}