import React, { Component } from 'react'
import { View,Text,StyleSheet,StatusBar } from 'react-native'

export default class  extends Component
{
    render()
    {
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor="#000" barStyle="light-content" />
                <Text style={styles.text}>Deploy</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:
    {
        fontWeight: 'bold',
        fontSize: 14,
    }
})