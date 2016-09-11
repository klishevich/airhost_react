import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { RECIEVE_BOOKINGS, ERROR_BOOKINGS, GET_BOOKINGS } from './actions/bookingActions'

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchGetBookings()
  ]
}

export function* getBookings() {
  try {
    var res
    yield fetch('https://airhosts.firebaseio.com/bookings.json').then(function(response) { 
      return response.json();
    }).then(function(j) {
      console.log('j',j); 
      res = j
    });
    const data = res
    yield put({type: RECIEVE_BOOKINGS, data})
  } catch (error) {
    yield put({type: ERROR_BOOKINGS, error})
  }
}

export function* watchGetBookings() {
  yield* takeEvery(GET_BOOKINGS, getBookings)
}

export function* helloSaga() {
  console.log('Hello Sagas!')
}