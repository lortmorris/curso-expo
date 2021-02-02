import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import NavigationBar from './components/NavigationBar';
import About from './screens/About';
import Home from './screens/Home';
import Topics from './screens/Topics';
import Images from './screens/Images';
import styles from './styles';

export default function App() {
  return (
      <NativeRouter>
        <StatusBar />
        <View style={styles.container}>
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/images" component={Images} />
        </View>
    </NativeRouter>
  );
}
