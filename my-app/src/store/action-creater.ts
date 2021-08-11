import { SET_TODULIST_LIST, DELETE_TODULIST_LIST } from './action'
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