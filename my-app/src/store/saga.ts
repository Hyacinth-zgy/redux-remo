// saga基本用法

import { takeEvery, put } from "redux-saga/effects";
import { setlistServerAction } from "./action-creater";
import { REDUXSAGALIST } from './action'
import axios from "axios";
function* mySaga() {
    yield takeEvery(REDUXSAGALIST, getsagalist);
}

function* getsagalist() {
    let res = axios.get('http://localhost:4000/productthree');
    let data = [] as any[];
    res.then(res => {
        data = res.data
    })
    const action = setlistServerAction(data);
    yield put(action)
}

export default mySaga;
