import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Header from "./Header";
import firebase from "firebase";

/*
Denne klasse er profil klassen. Den skal kunne vise den loggede ind brugers oplysninger
og tillade brugeren at ændre sine oplysninger
 */

export default class ProfileScreen extends React.Component {

    // Log ud metode, så brugeren kan logge ud af appen
    handleLogOut = async () => {
        await firebase.auth().signOut();
    };

/*
Render metoden som står for at vise
1) AppDrawer navigationen
2) Text inputs (password og email)  felt som skal tage imod brugerens oplysninger i "placeholder"
3) Knap der bekræfter redigeringen i både password og email
 */
    render() {
        return (
            <View style={[styles.mainContainer]}>
                <Header navigation={this.props.navigation} title='Profile Screen'/>

                <View style={styles.textContainer}>
                    <Text>Her skal man kunne ændre sine bruger indstillinger</Text>
                    <View style={styles.btn1}>
                        <TextInput style={styles.inputField} placeholder="email"/>
                        <Button title="Change email"></Button>
                    </View>
                    <View style={styles.btn1}>
                        <TextInput style={styles.inputField} placeholder="password"/>
                        <Button title="Change password"></Button>
                    </View>
                </View>

                <View style={styles.bottom}>
                    <Button style={styles.btnLogOut} onPress={this.handleLogOut} title="Log out"/>
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
        width: '100%',
    },
    btn1: {
        width: "75%",
        marginTop: 10,
        padding: 10,
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