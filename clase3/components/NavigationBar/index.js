import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { Link } from 'react-router-native';

import styles from './styles';

function NavigationBar() {
  return (
    <View style={styles.nav}>
      <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>Home</Text>
      </Link>
      <Link
        to="/about"
        underlayColor="#f0f4f7"
        style={styles.navItem}
      >
        <Text>About</Text>
      </Link>
      <Link
        to="/topics"
        underlayColor="#f0f4f7"
        style={styles.navItem}
      >
        <Text>Topics</Text>
      </Link>
      <Link
        to="/images"
        underlayColor="#f0f4f7"
        style={styles.navItem}
      >
        <Text>Images</Text>
      </Link>
    </View>
  );
}

export default NavigationBar;
