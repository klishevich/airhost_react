import { createAction } from 'redux-actions'

export const GET_BOOKINGS = 'GET_BOOKINGS'
export const RECIEVE_BOOKINGS = 'RECIEVE_BOOKINGS'
export const ERROR_BOOKINGS = 'ERROR_BOOKINGS'

export const TEST_BOOKINGS = 'TEST_BOOKINGS'

export const getBookings = createAction(GET_BOOKINGS)
export const testBookings = createAction(TEST_BOOKINGS)

