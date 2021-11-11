import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Touchable} from 'react-native';
import HomePage from './Components/homePage';
import UpNext from './Components/upNext';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.LeftTop}>
        <HomePage/>
      </View>
      <View style={styles.RightTop}>
        <UpNext/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEBD7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LeftTop: {
    backgroundColor: '#000000',
    
  },
  RightTop: {
    marginRight: 5
  }
});
