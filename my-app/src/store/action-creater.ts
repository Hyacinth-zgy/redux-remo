import { SET_TODULIST_LIST, DELETE_TODULIST_LIST, SET__TODULIST_LIST_SERVER } from './action'
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