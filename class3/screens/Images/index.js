import React from 'react';


import styles from './styles';

const img = require('../../assets/react-image.png');
import {
  View,
  Image,
} from 'react-native';

function Images() {
  return (
    <View>
      <Image source={img} style={styles.stretch}/>
    </View>
  )
}

export default Images;
