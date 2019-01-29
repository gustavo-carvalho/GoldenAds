export interface IAd {
  readonly id: string
  readonly title: string
  readonly price: string
  readonly imgUri: string
  readonly description: string
  readonly createdAt: Date
  readonly updatedAt: Date
  readonly adminId: string
  readonly amount: number
}

export interface IAdState {
  readonly ads: IAd[]
  readonly fetchAdsRequested: boolean
  readonly fetchAdsFail: string
  readonly selectedAd: IAd
}

export enum ActionTypes {
  FETCH_ADS_REQUESTED = 'golden-ads/ads/FETCH_ADS_REQUESTED',
  FETCH_ADS_SUCCESS = 'golden-ads/ads/FETCH_ADS_SUCCESS',
  FETCH_ADS_FAIL = 'golden-ads/ads/FETCH_ADS_FAIL',
  SELECT_AD = 'golden-ads/ads/SELECT_AD',
}
