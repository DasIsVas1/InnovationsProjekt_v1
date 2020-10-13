import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import Header from "./Header";

/*
Denne klasse er blot en enkelt screen som viser at der kan tilføjes flere screens til appDrawer
 */

export default class ExtraScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation} title='Extra Screen'/>
                <Text style={styles.textContainer}>DETTE ER EN EXTRA SCREEN</Text>

            </View>
        );
    }
}

/*
------------------------------------------ STYLESHEET --------------------------------------
 */

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%'
    },
    btn: {
        padding: 40,
        borderRadius: 10
    },
    btn_txt: {
        color: 'white'
    },
    blue: {
        backgroundColor: 'blue',
    },
    green: {
        backgroundColor: 'green',
    },
    textContainer: {
        flex: 0.1,
        marginTop: 200,
        alignItems: 'center',
        height: 100,
    },
});
