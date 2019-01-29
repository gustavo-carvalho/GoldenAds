import * as React from 'react'
import { Image, ImageStyle, ImageSourcePropType } from 'react-native'

import R from 'src/res'

export interface IProps {
  source: ImageSourcePropType
  style?: ImageStyle
}

export interface IState {
  error: boolean
}

export class ImageWithPlaceholder extends React.Component<IProps, IState> {
  state = {
    error: false,
  }

  _onLoadError = () => {
    this.setState({ error: true })
  }

  _getImgSource = () => {
    if (this.state.error) {
      return R.images.placeholder
    }

    return this.props.source
  }

  render() {
    return (
      <Image
        style={this.props.style}
        onError={this._onLoadError}
        source={this._getImgSource()}
      />
    )
  }
}
