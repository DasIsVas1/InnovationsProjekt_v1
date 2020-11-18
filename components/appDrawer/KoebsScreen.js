import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import Header from "./Header";

/*
Denne klasse er blot en enkelt screen som viser at der kan tilføjes flere screens til appDrawer
 */

export default class KoebsScreen extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation} title='Købs Screen'/>
                <Text style={styles.textContainer}>Vælg hvilket mundbind du gerne vil købe</Text>

                <View style={styles.btn2}>
                    <Button title="Sort"/>
                    <Button title="Hvid"/>
                </View>

                <View style={styles.btn2}>
                    <Button title="Rød"/>
                    <Button title="Grøn"/>
                </View>

                <View style={styles.btn2}>
                    <Button title="Lilla"/>
                    <Button title="Blå"/>
                </View>

                <View style={styles.btn2}>
                    <Button title="Eget design"/>
                </View>


                <TextInput style={styles.inputField} placeholder="Navn"/>
                <TextInput style={styles.inputField} placeholder="Adresse"/>

                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.inputField2} placeholder="By"/>
                    <TextInput style={styles.inputField3} placeholder="Post nummer"/>
                </View>

                <TextInput style={styles.inputField} placeholder="Land"/>
                <TextInput style={styles.inputField} placeholder="Kortnummer"/>


                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.inputField2} placeholder="Udløbs Dato mm/yy"/>
                    <TextInput style={styles.inputField3} placeholder="CCV"/>
                </View>




                <View style={styles.btn1}>
                    <Button title="Køb"/>
                </View>

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
        alignItems: 'center',
    },
    btn1: {
        width: "75%",
        marginTop: 10,
        padding: 10,
    },
    btn2: {
        justifyContent: 'center',
        flexDirection: "row",
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        alignItems: 'center',
        width: "100%"
    },
    btn: {
        padding: 40,
        borderRadius: 10
    },
    btn_txt: {
        color: 'white'

    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        alignItems: 'center',
        width: "75%",
    },
    inputField2: {
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        width: "58%"
    },
    inputField3: {
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        width: "15%"
    },
    textContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
});
