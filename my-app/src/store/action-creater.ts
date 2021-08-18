import { SET_TODULIST_LIST, DELETE_TODULIST_LIST, SET__TODULIST_LIST_SERVER } from './action'
import { Dispatch } from 'redux';
import axios from 'axios';
export function addListAxtion(itemText: string) {
  return {
    type: SET_TODULIST_LIST,
    value: itemText
  }
}

export function deleteListAction(index: number) {
  return {
    type: DELETE_TODULIST_LIST,
    value: index
  }
}

export function setlistServerAction(value: any[]) {
  return {
    type: SET__TODULIST_LIST_SERVER,
    value
  }
}

export const getListReduxThunk = () => {
  return (dispatch: Dispatch) => {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:4000/producttwo').then(res => {
        const data = res.data;
        dispatch(setlistServerAction(data))
        resolve(data)
      })
    })
  }
}



function makeASandwich(forPerson: any, secretSauce: any) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce,
  };
}

function apologize(fromPerson: any, toPerson: any, error: any) {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error,
  };
}

function withdrawMoney(amount: any) {
  return {
    type: 'WITHDRAW',
    amount,
  };
}
function fetchSecretSauce() {
  return fetch('https://www.google.com/search?q=secret+sauce');
}

export function makeASandwichWithSecretSauce(forPerson: any) {
  // We can invert control here by returning a function - the "thunk".
  // When this function is passed to `dispatch`, the thunk middleware will intercept it,
  // and call it with `dispatch` and `getState` as arguments.
  // This gives the thunk function the ability to run some logic, and still interact with the store.
  return function (dispatch: Dispatch): Promise<> {
    return fetchSecretSauce().then(
      (sauce) => dispatch(makeASandwich(forPerson, sauce)),
      (error) => dispatch(apologize('The Sandwich Shop', forPerson, error)),
    );
  };
}