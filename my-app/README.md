#项目说明

1.创创建项目 npx create-react-app my-app --template typescript

2.创建.npmrc 文件 指定镜像:
    phantomjs_cdnurl=http://cnpmjs.org/downloads
    sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
    registry=https://registry.npm.taobao.org
    
3.Install
    安装 sass-loader npm i node-sass@4.14.1 --save
    安装 antd npm i antd --save
    安装 redux npm i redux --save

4.创建 store
    index.js(数据)
    import { createStore } from 'redux';
    import reducer from './reducer';
    const store = createStore(reducer);
    export default store

5.reducer.js(数据加工工厂)
    const reducer = (state = defaultState, action: any) => {
    ...
    return state
    }
    export default reducer;

6.组件获取仓库数据
    导入 store: import store from 'store 路径';
    获取仓库数据: store.getState().[key] #key 是数据键
    订阅 store 数据变化: store.subscribe(listenner:Function);

7.Redux 可以用这三个基本原则来描述：
    单一数据源:整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
    State 是只读的:唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
    使用纯函数来执行修改:为了描述 action 如何改变 state tree ，你需要编写 reducers。

8.store 小知识
    维持应用的 state；
    提供 getState() 方法获取 state；
    提供 dispatch(action) 方法更新 state；
    通过 subscribe(listener) 注册监听器;
    通过 subscribe(listener) 返回的函数注销监听器。

9:action 小知识
    普通 action 对象示例:
    {
        type: ADD_TODO,
        text: 'Build my first Redux app'
    }
    使用 Action 创建函数：在 Redux 中的 action 创建函数只是简单的返回一个 action:
    function addTodo(text) {
        return {
        type: ADD_TODO,
        text
        }
    }
    这样做将使 action 创建函数更容易被移植和测试。
    在 传统的 Flux 实现中，当调用 action 创建函数时，一般会触发一个 dispatch，像这样
    function addTodoWithDispatch(text) {
      const action = {
        type: ADD_TODO,
        text
      }
      dispatch(action)
    }
    不同的是，Redux 中只需把 action 创建函数的结果传给 dispatch() 方法即可发起一次 dispatch 过程。
    dispatch(addTodo(text))
    dispatch(completeTodo(index))


9:reducer 小知识


10: redux-thunk 提供异步使用