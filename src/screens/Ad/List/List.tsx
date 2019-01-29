import * as React from 'react'
import { View, Text, FlatList } from 'react-native'

import { AdListItem } from 'src/components/Ad/ListItem'
import R from 'src/res'
import fakeData from './data.json'
import styles from './styles'
import moment from 'moment'

export interface IDataItem {
  id: string
  title: string
  price: string
  imgUri: string
  description: string
  createdAt: Date
  updatedAt: Date
  adminId: string
  amount: number
}

export interface IProps {
  data: IDataItem[]
}

function AdListScreen({ data }: IProps) {
  const _renderItem = (item) => {
    const date = moment(item.date)
    
    return (
      <AdListItem
        date={date.format('DD MMM, YYYY')}
        title={item.title}
        imgSource={{ uri: item.picture }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={fakeData}
        renderItem={({ item, index }) => _renderItem(item)}
        keyExtractor={({ id }) => id.toString()}
      />
    </View>
  )
}

export default React.memo(AdListScreen)
