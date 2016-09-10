import { createAction } from 'redux-actions';

import { post, get } from './async';

export const BOOKINGS_PATH = 'https://airhosts.firebaseio.com/bookings.json';

export const GET_BOOKINGS = 'GET_BOOKINGS';
export const getBookings = get(BOOKINGS_PATH, GET_BOOKINGS);
