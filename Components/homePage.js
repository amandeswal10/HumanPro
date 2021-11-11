import React from 'react';
import { Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import styles from '../Components/homePageStyle';

export default function HomePage() {
    return(
        <View>
            <Text style={{color:'#FAEBD7'}}>This is your To-Do List</Text>
        </View>

    );
}