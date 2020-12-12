import * as React from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet, ScrollView, Button, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';
import firebase from "firebase";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import SignUpScreen from "./SignUpScreen";


export default class LoginScreen extends React.Component {


    static navigationOptions = {
        header: null
    }

    handleGoToSignUp = () => {
        this.props.navigation.navigate('SignUp')
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.header}>iMask</Text>
                <View
                    style = {{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                           source={{uri: "https://i.pinimg.com/originals/a0/1f/a1/a01fa10acb4a708d6f586851de36534f.jpg"}}
                    />
                </View>
                <KeyboardAvoidingView behavior="position">
                    <LoginForm />
                </KeyboardAvoidingView>

                <View>
                    <TouchableOpacity onPress={this.handleGoToSignUp} style={styles.signUpButton}>
                        <Text style={styles.signUpText}>Create User</Text>
                    </TouchableOpacity>
                </View>


            </View>
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
        textAlign: 'center'
    },
    borderLine: {
        textAlign: 'center',
        borderBottomWidth: 1,
        fontWeight: 'bold',
    },
    signUpContainer: {
        justifyContent: 'center',
        padding: 15,
    },
    signUpButton: {
        marginTop: 10,
        backgroundColor: '#4da6ff',
        paddingVertical: 8,
        borderRadius: 1,
    },
    signUpText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
    },
    logo: {
        flex: 2,
        width: 320,
        height: 320,
        position: 'absolute',
        alignSelf: 'center',
    },
    logoContainer: {
        marginTop: 20,
    }
});












