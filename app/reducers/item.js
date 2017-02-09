import {
  SENT_REQUEST_PENDING,
  SENT_REQUEST_FULFILLED,
  SENT_ITEM_REQUEST_FULFILLED
} from '../actions/items/types';

const defaultState = {
  item: {},
  items: []
}

export default function item(state = defaultState, action) {
  switch (action.type) {
    case SENT_REQUEST_PENDING:
      return Object.assign({}, state, {
        isFetching: true,
        items: []
      })
    case SENT_ITEM_REQUEST_FULFILLED:
      return Object.assign({}, state, {
        isFetching: false,
        item: action.item
      })
    case SENT_REQUEST_FULFILLED:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      })
    default:
      return state;
  }
}
