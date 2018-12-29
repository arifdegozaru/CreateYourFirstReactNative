import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import style from './styles'
import { capitalizeFirstLetter } from '../../helpers/string'

const Header = ({ picture, name }) => {
  return (
    <View style={style.headerContainer}>
      <Image
        source={{ uri: picture.large }}
        style={style.image}
      />
      <Text>
        {capitalizeFirstLetter(name.first)}{capitalizeFirstLetter(name.last)}
      </Text>
    </View>
  )
}

export default Header
