import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import ToDoList from './Components/ToDoList';
import ProductivityScore from './Components/ProductivityScore';
import TasksDone from './Components/TasksDone';

export default function App() {
  return (

    <View style={styles.container}>
      
      <View style={styles.Top}> 
        <ProductivityScore/>                  
      </View>

      <View style={styles.Middle}>
        <ToDoList/>
      </View>

      <View style={styles.Bottom}>
        <TasksDone/>      
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAEBD7',
  },
  Top: {
    flex: 1,
    backgroundColor: '#FFA07A',
    width: '100%',
    height: '50%',
    
  },
  Middle: {
    flex: 4,
    flexDirection:'column',
    backgroundColor: '#000000',  
    width: '100%',
    height: '50%'
  },
  Bottom: {
    flex: 1,
    backgroundColor: '#FFA07A',
    width: '100%',
    height: '50%',    
  }
});
