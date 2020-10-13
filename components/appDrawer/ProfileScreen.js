import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import Header from "./Header";
import firebase from "firebase";

export default class ProfileScreen extends React.Component {

    handleLogOut = async () => {
        await firebase.auth().signOut();
    };


    render() {
        return (
            <View style={[styles.mainContainer]}>
                <Header navigation={this.props.navigation} title='Profile Screen'/>

                <View style={styles.textContainer}>
                    <Text>Her skal man kunne ændre sine bruger indstillinger</Text>
                    <TextInput style={styles.inputField} placeholder="email"/>
                    <TextInput style={styles.inputField} placeholder="password"/>
                </View>


                <View style={styles.bottom}>
                    <Button style={styles.btnLogOut} onPress={this.handleLogOut} title="Log out"/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',

    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        paddingLeft: 50,
        paddingRight: 50,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    text1: {
        justifyContent: "center"
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
    },
    btnLogOut: {
        position: 'absolute',
        bottom: 0,
    },
    imageContainer: {
        height: 250,
        alignItems: 'center',
    },
    header: {
        marginBottom: 10,
        flex: 0.1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 35,
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderColor: 'black',
        height: 230,
        borderWidth: 1,
    }
});