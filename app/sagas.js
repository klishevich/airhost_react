import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { RECIEVE_BOOKINGS, ERROR_BOOKINGS, GET_BOOKINGS } from './actions/bookingActions'
import { RECIEVE_CHANNELS, ERROR_CHANNELS, GET_CHANNELS } from './actions/channelActions'
import { RECIEVE_HOUSES, ERROR_HOUSES, GET_HOUSES } from './actions/houseActions'

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* getBookings() {
  try {
    var data
    yield fetch('https://airhosts.firebaseio.com/bookings.json').then(function(response) { 
      return response.json()
    }).then(function(j) {
      data = j
    });
    yield put({type: RECIEVE_BOOKINGS, data})
  } catch (error) {
    yield put({type: ERROR_BOOKINGS, error})
  }
}

export function* watchGetBookings() {
  yield* takeEvery(GET_BOOKINGS, getBookings)
}

export function* getChannels() {
  try {
    var data
    yield fetch('https://airhosts.firebaseio.com/channels.json').then(function(response) { 
      return response.json();
    }).then(function(j) {
      data = j
    });
    yield put({type: RECIEVE_CHANNELS, data})
  } catch (error) {
    yield put({type: ERROR_CHANNELS, error})
  }
}

export function* watchGetChannels() {
  yield* takeEvery(GET_CHANNELS, getChannels)
}

export function* getHouses() {
  try {
    var data
    yield fetch('https://airhosts.firebaseio.com/houses.json').then(function(response) { 
      return response.json();
    }).then(function(j) {
      data = j
    });
    yield put({type: RECIEVE_HOUSES, data})
  } catch (error) {
    yield put({type: ERROR_HOUSES, error})
  }
}

export function* watchGetHouses() {
  yield* takeEvery(GET_HOUSES, getHouses)
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchGetBookings(),
    watchGetChannels(),
    watchGetHouses()
  ]
}
