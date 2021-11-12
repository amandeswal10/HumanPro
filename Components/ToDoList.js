import React from "react";
import { Text, SafeAreaView , ScrollView } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from './ToDoListStyle';

const things = [{priority: 1, task: 'Iron Clothes'}, {priority: 2, task: 'Take Garbage Out'}, {priority: 3 , task: 'Buy Groceries'}, {priority: 4, task: 'Pay Bills'}, {priority: 5, task: 'Call Mom'}]

export default function ToDoList() {

    return(
        <SafeAreaView>
            
                {things.map(thing =>{
                    return(
                        <ScrollView key={thing.priority}>
                    
                        
                            <Text style={styles.list}>[{thing.priority}] {thing.task}</Text>
                        
                        </ScrollView>
                        
                    );
                }
                    )}
                
            
        </SafeAreaView>

    );
}