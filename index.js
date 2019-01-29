/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native'
//import { AdListScreen } from 'src/screens/Ad/List'
import { AppScreen } from 'src/screens/Main/App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => AppScreen)
