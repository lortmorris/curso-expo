import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: 'red',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open up App.js to start working on your app!</Text>
      <Text
        style={{
          fontSize: 34,
          color: 'blue'
        }}
      >
        Hola mundo
      </Text>
      <Image
       style={{
          width: 150,
          height: 150,
        }}
       source={{
         uri: 'https://reactnative.dev/img/tiny_logo.png',
       }}
       />
      <StatusBar style="auto" />
    </View>
  );
}
