import * as React from 'react'
import { View, FlatList } from 'react-native'

import { AdListItem } from 'src/components/Ad/ListItem'
import { IAd } from 'src/redux/ad'
import styles from './styles'
import moment from 'moment'

export interface IProps {
  data: IAd[]
}

function AdListScreen({ data }: IProps) {
  const _renderItem = (item: IAd) => {
    const date = moment(item.createdAt)

    return (
      <AdListItem
        date={date.format('DD MMM, YYYY')}
        title={item.title}
        imgSource={{ uri: item.imgUri }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => _renderItem(item)}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  )
}

export default React.memo(AdListScreen)
