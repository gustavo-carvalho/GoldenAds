import { StyleSheet, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import R from 'src/res'

interface IStyles {
  container: ViewStyle
  adImg: ImageStyle
  body: ViewStyle
  title: TextStyle
  description: TextStyle
  separator: ViewStyle
  label: TextStyle
}

export default StyleSheet.create<IStyles>({
  container: {
    flex: 1,
  },
  body: {
    padding: R.dimensions.SPACING,
  },
  adImg: {
    width: '100%',
    height: 200,
  },
  label: {
    fontWeight: 'bold',
    marginRight: R.dimensions.SPACING,
  },
  title: {
    fontSize: R.dimensions.BIG_TEXT,
    color: R.colors.PRIMAY,
  },
  separator: {
    paddingVertical: R.dimensions.SPACING / 3,
    flexDirection: 'row',
    flexWrap: 'wrap'

  },
  description: {
    fontSize: R.dimensions.REGULAR_TEXT,
  },
})
