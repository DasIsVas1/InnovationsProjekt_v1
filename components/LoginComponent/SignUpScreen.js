import * as React from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet, ScrollView, Button, SafeAreaView, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import Constants from "expo-constants";
import firebase from "firebase";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import LoginScreen from "./LoginScreen";

export default class SignUpScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    handleGoToLogin = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <TouchableHighlight style={styles.button}>
                    <Button title='Go Back' onPress={this.handleGoToLogin} />
                </TouchableHighlight>
                <Text style={styles.header}>Text</Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
                />
                <View >
                    <Image style={styles.logo}
                           source={{uri: "https://i.pinimg.com/originals/a0/1f/a1/a01fa10acb4a708d6f586851de36534f.jpg"}}
                    />
                </View>
                <KeyboardAvoidingView behavior="position" style={styles.signUpContainer}>
                    <SignUpForm/>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    header: {
        margin: 24,
        fontSize: 40,
        fontStyle: "italic",
        textAlign: 'center',
    },
    button: {
        marginRight: 300,
    }                    ,
    singUpContainer: {
        marginTop: 50,
    },
    description: {
        borderWidth: 1,
        margin: 10,
        padding: 40,
        borderRadius: 5,
        borderColor: 'white',
    },
    textStyle: {
        color: 'grey',
        fontSize: 15,
        marginTop: 10,
    },
    textStyle2: {
        color: 'grey',
        fontSize: 20,
        marginTop: 10,
        flexDirection: 'row',
    },
});