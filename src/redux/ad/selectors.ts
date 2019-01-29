import { IApplicationState } from 'src/redux'

export const selectors = {
  getAds: (state: IApplicationState) => state.ad.ads,
}
