import { SET_TODULIST_LIST } from './action'
export function addListAxtion(itemText: string) {
  return {
    type: SET_TODULIST_LIST,
    value: itemText
  }
}