import * as React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native'

import styles from './styles'
import { ImageWithPlaceholder } from 'src/components/UI/ImageWithPlaceholder'
import R from 'src/res'

export interface IProps {
  imgSource: ImageSourcePropType
  title: string
  date: string
  onPress?: () => void
}

function AdListItem({ imgSource, title, onPress, date }: IProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ImageWithPlaceholder style={styles.imgStyle} source={imgSource} />
        <View style={styles.footer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(AdListItem)
