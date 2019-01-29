import { StyleSheet, ViewStyle } from 'react-native'

import R from 'src/res'

interface IStyles {
  container: ViewStyle
}

export default StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    padding: R.dimensions.SPACING,
    backgroundColor: R.colors.SCREEN_BG,
  },
})
