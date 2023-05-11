import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Content = () => {
    const [title, setTitle] = useState('testing my title');
    return (
        <View style={styles.container}>
            <Text style={styles.man}>What'up MAN! {title}</Text>
            <Text>description</Text>
            <Button title='Subscribe'/>
        </View>
        
    )
    
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        color: 'yellow'
    },
    man: {
        color: 'pink'
    }
})

export default Content;