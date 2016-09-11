import { createAction } from 'redux-actions'

export const GET_HOUSES = 'GET_HOUSES'
export const RECIEVE_HOUSES = 'RECIEVE_HOUSES'
export const ERROR_HOUSES = 'ERROR_HOUSES'

export const getHouses = createAction(GET_HOUSES)
