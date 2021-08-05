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
