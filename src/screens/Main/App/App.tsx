import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import store from 'src/redux/store'
import Navigator from '../Navigator'

export class AppScreen extends React.Component {
  constructor(props: any) {
    super(props)

    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
