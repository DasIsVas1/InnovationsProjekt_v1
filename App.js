import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native';
import DesignMBScreen from "./components/Screens/DesignMBScreen";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Entypo} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import CameraScreen from "./components/Screens/CameraScreen";
import CameraScreenTest from "./components/UnusedComponentsAndScreens/CameraScreenTest";
import UserScreen from "./components/Screens/UserScreen";
import * as firebase from "firebase";
import SignUpForm from "./components/LoginComponent/SignUpForm";
import LoginForm from "./components/LoginComponent/LoginForm";
import {Card} from 'react-native-paper';
import LoginScreen from "./components/LoginComponent/LoginScreen";
import {createStackNavigator} from "react-navigation-stack";
import SignUpScreen from "./components/LoginComponent/SignUpScreen";

/*
Husk at begge skal importeres.
1. skal vi have en container med som bruges i default (rd. "MAIN") metoden
2. skal vi have importer selve bottom navigation componenten
 */

const fireBaseConfig = {
    apiKey: "AIzaSyB2Xe40c4U_1MrC9ffo6ubNDHod5RLpih0",
    authDomain: "innovationsprojektmbapp.firebaseapp.com",
    databaseURL: "https://innovationsprojektmbapp.firebaseio.com",
    projectId: "innovationsprojektmbapp",
    storageBucket: "innovationsprojektmbapp.appspot.com",
    messagingSenderId: "966473468096",
    appId: "1:966473468096:web:7e9b4bd1f9ed33c8e7c525"
};
// vigtigt at tilføje nedestående if statement, da ellers init firebase flere gange
if (!firebase.apps.length) {
    firebase.initializeApp(fireBaseConfig);
}


const LoginNavigator = createStackNavigator(
    {
        Login: {screen: LoginScreen},
        SignUp: {screen: SignUpScreen},
    },
);

const LoginContainer = createAppContainer(LoginNavigator);


const tabNavigator = createBottomTabNavigator(
    /*
    Routes er selfølgelig en reference til den screen der skal vises
    */
    {
        DesignScreen: {
            screen: DesignMBScreen,
            navigationOptions: {
                /*Navn*/
                tabBarLabel: "Design",
                /*Ikon*/
                tabBarIcon: ({tintColor}) => (
                    <Entypo name="edit" size={24} color={tintColor}/>
                )
            },
        },
        TryMBScreen: {

            screen: CameraScreen,
            navigationOptions: {
                /*Navn*/
                tabBarLabel: "Try",
                /*Ikon*/
                tabBarIcon: ({tintColor}) => (
                    <Entypo name="camera" size={24} color={tintColor}/>
                )
            },
        },

        User: {
            /*
            Kalder SettingsStack for at have navigation frem og tilbage med stacks
             */
            screen: UserScreen,
            navigationOptions: {
                tabBarLabel: "User",
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name="ios-settings" size={24} color={tintColor}/>
                )
            }
        },
    },
    /*
    Generelle label indstillinger
     */
    {
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                fontSize: 15,
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            size: 40
        }
    }
);

const AppNav = createAppContainer(tabNavigator);


export default class App extends React.Component {

    state = {user: null}

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({user});
        });
    }

    render() {
        const {user} = this.state

        if (!user) {
            return (
                <LoginContainer/>
            )
        } else {
            return (

                <AppNav user={user}/>

            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});



