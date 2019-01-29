import * as React from 'react'
import { connect } from 'react-redux'
import { NavigationScreenProp, NavigationState } from 'react-navigation'

import { actions, IAd } from 'src/redux/ad'
import { IApplicationState } from 'src/redux/root'
import AdListScreen from './List'

interface IPropsFromState {
  ads: IAd[]
}

interface IPropsFromDispatch {
  fetchAds: typeof actions.fetchAds
}

interface INavProps {
  navigation: NavigationScreenProp<NavigationState>
}

type Ipros = IPropsFromState & IPropsFromDispatch & INavProps

class ListContainer extends React.Component<Ipros> {
  static navigationOptions = {
    title: 'Advertisements',
  }

  componentDidMount() {
    this.props.fetchAds()
  }

  render() {
    return <AdListScreen data={this.props.ads} />
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  ads: state.ad.ads,
})

export default connect(
  mapStateToProps,
  { ...actions }
)(ListContainer)
