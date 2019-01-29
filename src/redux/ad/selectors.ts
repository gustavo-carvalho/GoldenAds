import { IApplicationState } from 'src/redux/root'

export const selectors = {
  getAds: (state: IApplicationState) => state.ad.ads,
}
