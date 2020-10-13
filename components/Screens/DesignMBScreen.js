import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, Button} from 'react-native';

/*
Denne klasse står for at brugeren kan skifte design/designe sit eget mundbind
som meget gerne skulle parses til kameraet som et filter.
Dette er dog ikke tilfældet og derved er det tiltænkt at det kan videreudvikles på.
 */

export default class DesignMBScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer}>Dette skal være screen </Text>
                <Text style={styles.textContainer2}>"design mundbind"</Text>
                <Text style={styles.textContainer}>screen </Text>
                <Image style={styles.logo}
                       source={{uri: "https://images.rawpixel.com/image_png_900/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczY3LXBvbS0yNzMxLnBuZw%3D.png?s=zaT7Gqgj60wShPhABbOPubDqT3QI9zk8AelBQM9ldhI"}}
                />
                <View style={styles.btn1}>
                    <Button title="Blå"/>
                </View>
                <View style={styles.btn1}>
                    <Button title="Rød"/>
                </View>
                <View style={styles.btn1}>
                    <Button title="Grøn"/>
                </View>
                <View style={styles.btn1}>
                    <Button title="Lilla"/>
                </View>
                <View style={styles.btn1}>
                    <Button title="Indsæt billede på mundbind"/>
                </View>
            </View>
        );
    };
}

/*
------------------------------------------ STYLESHEET --------------------------------------
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b5b5b5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn1: {
        width: "75%",
        marginTop: 10,
        padding: 10,
    },
    textContainer: {
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    },
    textContainer2: {
        fontSize: 35,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    },
    logo: {
        width: "90%",
        height: 200,
        margin: 10,
        borderRadius: 20,

    },
});