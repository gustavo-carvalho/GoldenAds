import * as fromAction from './actions'
import { ActionTypes as types, IAdState } from './types'
import { AppStateIOS } from 'react-native'

const initialState: IAdState = {
  ads: [],
  fetchAdsRequested: false,
  fetchAdsFail: null,
  selectedAd: null,
}

const reducer = (
  state = initialState,
  action: fromAction.Actions
): IAdState => {
  switch (action.type) {
    case types.FETCH_ADS_REQUESTED:
      return { ...state, fetchAdsRequested: true }

    case types.FETCH_ADS_SUCCESS:
      return { ...state, ads: action.payload }

    case types.FETCH_ADS_FAIL:
      return { ...state, fetchAdsFail: action.payload }

    case types.SELECT_AD:
      return { ...state, selectedAd: action.payload }

    default:
      return state
  }
}

export { reducer as AdReducer }
