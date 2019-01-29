import { all, fork, put, takeLatest } from 'redux-saga/effects'

import AdApi from 'src/common/AdApi'
import { ActionTypes as types, IAd } from './types'
import { actions } from './actions'

function* fetchAds() {
  try {
    const ads = yield AdApi.fetchAds()
    const parsedAds: IAd[] = ads.map(o => ({
      ...o,
      imgUri: o.picture,
      createdAt: new Date(o.created_at),
      updatedAt: new Date(o.updated_at),
      adminId: o.admin_id,
    }))

    yield put(actions.fetchAdsSuccess(parsedAds))
  } catch (err) {
    yield put(actions.fetchAdsFail(err.message))
  }
}

function* watcher() {
  yield takeLatest(types.FETCH_ADS_REQUESTED, fetchAds)
}

export function* adSaga() {
  yield all([fork(watcher)])
}
