import { createAction } from 'redux-actions'

export const GET_CHANNELS = 'GET_CHANNELS'
export const RECIEVE_CHANNELS = 'RECIEVE_CHANNELS'
export const ERROR_CHANNELS = 'ERROR_CHANNELS'

export const getChannels = createAction(GET_CHANNELS)