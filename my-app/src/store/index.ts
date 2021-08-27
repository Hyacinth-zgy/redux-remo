// redux-thunk
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk));
export default store

// redux-saga
// import createSagaMiddleware from "@redux-saga/core";
// import reducer from './reducer';
// import { createStore, applyMiddleware } from 'redux';
// import mySaga from './saga'
// const sagaMiddlerware = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleware(sagaMiddlerware));
// sagaMiddlerware.run(mySaga)
// export default store