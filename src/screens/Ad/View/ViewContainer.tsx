import * as React from 'react'
import { connect } from 'react-redux'
import { NavigationScreenProp, NavigationState } from 'react-navigation'

import { IAd } from 'src/redux/ad'
import ViewAd from './/View'
import { IApplicationState } from 'src/redux/root'

export interface IProspFromState {
  selectedAd: IAd
}

interface INavProps {
  navigation: NavigationScreenProp<NavigationState>
}

type Props = IProspFromState & INavProps

class ViewContainer extends React.Component<Props> {
  static navigationOptions = {
    title: 'Visualizar anúncio',
  }
  render() {
    return <ViewAd ad={this.props.selectedAd} />
  }
}

const mapStateToProps = (state: IApplicationState) => ({
  selectedAd: state.ad.selectedAd,
})

export default connect(mapStateToProps)(ViewContainer)
