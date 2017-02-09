import fetch from 'isomorphic-fetch';

import {
  SENT_REQUEST_PENDING,
  SENT_REQUEST_FULFILLED,
  SENT_ITEM_REQUEST_FULFILLED
} from './types';

export const sendRequest = () => {
  return {
    type: SENT_REQUEST_PENDING
  }
}

export const receiveRequest = (json) => {
  return {
    type: SENT_REQUEST_FULFILLED,
    items: json
  }
}

export const receiveItemRequest = (json) => {
  return {
    type: SENT_ITEM_REQUEST_FULFILLED,
    item: json
  }
}

export const getItems = () => {
  return (dispatch) => {
    dispatch(sendRequest())
    fetch('https://ulyngo-85eed.firebaseio.com/.json', {
      mode: 'cors',
      dataType: 'json',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
    .catch( err => {
      //TODO: Handle no network connection
      console.log(err)
    })
    .then(response => response.json())
    .then(json => dispatch(receiveRequest(json)))
  }
}

export const getItem = (id) => {
  return (dispatch) => {
    dispatch(sendRequest())
    fetch(`https://ulyngo-85eed.firebaseio.com/${id}.json`, {
      mode: 'cors',
      dataType: 'json',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    })
    .catch( err => {
      //TODO: Handle no network connection
      console.log(err)
    })
    .then(response => response.json())
    .then(json => dispatch(receiveItemRequest(json)))
  }
}
