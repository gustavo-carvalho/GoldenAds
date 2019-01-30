/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native'
import { MainAppScreen } from 'src/screens/Main/App'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => MainAppScreen)
