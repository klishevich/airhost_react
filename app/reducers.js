import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { RECIEVE_BOOKINGS, TEST_BOOKINGS } from 'actions/bookingActions';
import { RECIEVE_CHANNELS } from 'actions/channelActions';
import { RECIEVE_HOUSES } from 'actions/houseActions';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

function getBookings(state = routeInitialState, action) {
  switch (action.type) {
    case RECIEVE_BOOKINGS:
      // console.log('RECIEVE_BOOKINGS', action.data);
      return state.merge({
        bookings: action.data
      });
      // return Object.assign({}, state, {
      //   bookings: action.data
      // })
    default:
      return state
  }
}

function testBookings(state = routeInitialState, action) {
  switch (action.type) {
    case TEST_BOOKINGS:
      console.log('TEST_BOOKINGS');
      return state.merge({
        test_var: 'TEST_BOOKINGS'
      });
    default:
      return state
  }
}

function getChannels(state = routeInitialState, action) {
  switch (action.type) {
    case RECIEVE_CHANNELS:
      // console.log('getChannels', action.data);
      return Object.assign({}, state, {
        channels: action.data
      })
    default:
      return state
  }
}

function getHouses(state = routeInitialState, action) {
  switch (action.type) {
    case RECIEVE_HOUSES:
      console.log('getHouses', action.data);
      return Object.assign({}, state, {
        houses: action.data
      })
    default:
      return state
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    bookings: getBookings,
    test: testBookings,
    channels: getChannels,
    houses: getHouses,
    language: languageProviderReducer,
    ...asyncReducers,
  });
}
