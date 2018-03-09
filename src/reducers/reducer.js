import update from 'react-addons-update'; // immutability helper
import _ from 'underscore';

export const initialState = {
  list: [], // An array of object { text: `string`, checked: `bool` }
}
export default function appState(state = initialState, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      return update(state, {
        list: { $push: [{ id: _.size(state.list), item: action.item, checked: false, order: _.size(state.list) + 1 }] },
      })
    case 'DELETE_ITEM':
      return update(state, {
        list: { $set: state.list.filter(l => l.id !== action.id) },
      })
    case 'TOGGLE_ITEM':
      return update(state, {
        list: { $set: state.list.map(l => {
          if (l.id === action.id) l.checked = action.checked
          return l
        })},
      })
    case 'TOGGLE_ALL':
      return update(state, {
        list: { $set: state.list.map(l => {
          l.checked = !l.checked
          return l
        })},
      })
    default:
      return state
  }
}