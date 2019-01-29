import * as React from 'react'
import { connect } from 'react-redux'
import { NavigationScreenProp, NavigationState } from 'react-navigation'

import { actions, IAd, selectors } from 'src/redux/ad'
import { IApplicationState } from 'src/redux/root'
import AdListScreen from './List'

interface IPropsFromState {
  ads: IAd[]
}

interface IPropsFromDispatch {
  fetchAds: typeof actions.fetchAds
  selectAd: typeof actions.selectAd
}

interface INavProps {
  navigation: NavigationScreenProp<NavigationState>
}

type Ipros = IPropsFromState & IPropsFromDispatch & INavProps

class ListContainer extends React.Component<Ipros> {
  static navigationOptions = {
    title: 'Anúncios',
  }

  componentDidMount() {
    this.props.fetchAds()
  }

  _onAdPress = (ad: IAd) => {
    this.props.selectAd(ad)
    this.props.navigation.navigate('ViewAd')
  }

  render() {
    return <AdListScreen onAdPress={this._onAdPress} data={this.props.ads} />
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  ads: selectors.getAds(state),
})

export default connect(
  mapStateToProps,
  { ...actions }
)(ListContainer)
