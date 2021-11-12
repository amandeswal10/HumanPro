import React from "react";
import { Text, SafeAreaView } from 'react-native';
import styles from "./ProductivityScoreStyle";

export default function ProductivityScore() {
    
    return(
        <SafeAreaView>
            <Text style={styles.productivityScore}>SCORE</Text>
        </SafeAreaView>

    );
}