import * as React from 'react'
import { View, Text, ScrollView } from 'react-native'
import moment from 'moment'

import styles from './styles'
import { IAd } from 'src/redux/ad'
import { ImageWithPlaceholder } from 'src/components/UI/ImageWithPlaceholder'

export interface IProps {
  ad: IAd
}

function ViewAd({ ad }: IProps) {
  return (
    <ScrollView style={styles.container}>
      <ImageWithPlaceholder style={styles.adImg} source={{ uri: ad.imgUri }} />

      <View style={styles.body}>
        <View style={styles.separator}>
          <Text style={styles.title}>{ad.title}</Text>
        </View>

        <View style={styles.separator}>
          <Text style={styles.label}>ID:</Text>
          <Text style={styles.description}>{ad.id}</Text>
        </View>

        <View style={styles.separator}>
          <Text style={styles.label}>Quantidade:</Text>
          <Text style={styles.description}>{ad.amount}</Text>
        </View>

        <View style={styles.separator}>
          <Text style={styles.label}>Preço:</Text>
          <Text style={styles.description}>{ad.price}</Text>
        </View>

        <View style={styles.separator}>
          <Text style={styles.label}>Data de criação:</Text>
          <Text style={styles.description}>
            {moment(ad.createdAt).format('DD/MM/YYYY')}
          </Text>
        </View>

        <View style={styles.separator}>
          <Text style={styles.label}>Data de atualização:</Text>
          <Text style={styles.description}>
            {moment(ad.updatedAt).format('DD/MM/YYYY')}
          </Text>
        </View>

        <View style={styles.separator}>
          <Text style={styles.label}>Descrição:</Text>
          <Text style={styles.description}>{ad.description}</Text>
        </View>

        <View style={styles.separator}>
          <Text style={styles.label}>ID do admin:</Text>
          <Text style={styles.description}>{ad.adminId}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default React.memo(ViewAd)
