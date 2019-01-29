import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native'

import R from 'src/res'

interface IStyles {
  container: ViewStyle
  imgStyle: ImageStyle
  title: TextStyle
  footer: ViewStyle
  date: TextStyle
}

export default StyleSheet.create<IStyles>({
  container: {
    ...R.palettes.cardBorder,
    flex: 1,
    marginVertical: R.dimensions.SPACING,
    backgroundColor: R.colors.BOX_LIGHT_BG,
    paddingBottom: R.dimensions.SPACING,
    borderRadius: R.dimensions.IMG_RADIUS,
  },
  imgStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: 150,
    borderTopRightRadius: R.dimensions.IMG_RADIUS,
    borderTopLeftRadius: R.dimensions.IMG_RADIUS,
  },
  footer: {
    paddingHorizontal: R.dimensions.SPACING,
  },
  title: {
    paddingTop: R.dimensions.SPACING,
    fontSize: 16,
    color: R.colors.PRIMAY,
  },
  date: {
    fontSize: 12,
    color: R.colors.GREY_TEXT,
  },
})
