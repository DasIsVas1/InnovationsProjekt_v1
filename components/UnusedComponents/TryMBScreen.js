import React, {Component} from 'react'
import {StyleSheet, View, Text} from "react-native";

export default class DesignMBScreen extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.textContainer}>Dette skal være kamera med mundbind</Text>
            </View>
        );
    };
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF0000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textContainer: {
        fontSize: 100,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    }

});