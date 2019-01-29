import {
  createStackNavigator,
  createAppContainer,
  StackNavigatorConfig,
  NavigationStackScreenOptions,
  NavigationScreenConfig,
} from 'react-navigation'

import { AdListScreen } from 'src/screens/Ad/List'
import { ViewAdScreen } from 'src/screens/Ad/View'
import R from 'src/res'

const commonStackNavOptions: StackNavigatorConfig = {
  headerLayoutPreset: 'center',
  headerMode: 'float',
  headerBackTitleVisible: false,
}

const commonNavOptions: NavigationScreenConfig<NavigationStackScreenOptions> = {
  headerTitleStyle: {
    fontWeight: 'bold',
    color: R.colors.LIGHT_TEXT,
  },
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: R.colors.PRIMAY,
    elevation: 0,
  },
  headerTintColor: R.colors.LIGHT_TEXT,
}
const AppNavigator = createStackNavigator(
  {
    AdList: AdListScreen,
    ViewAd: ViewAdScreen,
  },
  {
    ...commonStackNavOptions,
    initialRouteName: 'AdList',
    defaultNavigationOptions: {
      ...commonNavOptions,
    },
  }
)

export default createAppContainer(AppNavigator)
