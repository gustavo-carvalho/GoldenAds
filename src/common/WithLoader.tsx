import React from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

function WithLoader(Component) {
  return function WihLoadingComponent({ loading, ...props }) {
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={loading} />

        <Component {...props} />
      </View>
    )
  }
}

export default WithLoader
