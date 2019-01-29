import { createAction } from 'src/common/actionHelper'
import { ActionsUnion } from 'src/common/typeHelper'

import { ActionTypes as types, IAd } from './types'

export const actions = {
  fetchAds: () => createAction(types.FETCH_ADS_REQUESTED),
  fetchAdsFail: (err: string) => createAction(types.FETCH_ADS_FAIL, err),
  fetchAdsSuccess: (ads: IAd[]) => createAction(types.FETCH_ADS_SUCCESS, ads),
  selectAd: (ad: IAd) => createAction(types.SELECT_AD, ad),
}

export type Actions = ActionsUnion<typeof actions>
