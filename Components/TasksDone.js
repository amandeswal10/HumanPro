import { Text, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './TasksDoneStyle';

export default function TasksDone() {
    
    return(
        <SafeAreaView>
            <Text style={styles.tasksDone}>LAST TASK</Text>
        </SafeAreaView>

    );
}