import { StyleSheet, ViewStyle } from 'react-native'

import R from 'src/res'

interface IStyles {
  container: ViewStyle
}

export default StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    paddingHorizontal: R.dimensions.SPACING,
    backgroundColor: R.colors.SCREEN_BG,
  },
})
