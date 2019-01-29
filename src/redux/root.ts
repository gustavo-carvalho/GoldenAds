import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'

import { IAdState, adSaga, AdReducer } from './ad'

export interface IApplicationState {
  ad: IAdState
}

export const rootReducer = combineReducers<IApplicationState>({
  ad: AdReducer,
})

export function* rootSaga() {
  yield all([fork(adSaga)])
}
