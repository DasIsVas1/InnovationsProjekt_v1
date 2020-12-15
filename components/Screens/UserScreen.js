import React from 'react';
import {StyleSheet, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from "react-navigation-drawer";
import YourDesignsScreen from "../appDrawer/YourDesignsScreen";
import ProfileScreen from '../appDrawer/ProfileScreen';
import {createAppContainer} from "react-navigation";
import KoebsScreen from "../appDrawer/KoebsScreen";
import firebase from "firebase";

/*
Denne klasse er selve AppDrawer funktionen. Her kan man refferer til den andre sceens som man gerne vil have med
 */


const MyDrawerNavigator = createDrawerNavigator(
    {
        Designs: {
            screen: YourDesignsScreen
        },
        Profile: {
            screen: ProfileScreen
        },
        Køb: {
            screen: KoebsScreen
        },
    });

const AppContainer = createAppContainer(MyDrawerNavigator)

export default class App extends React.Component {

    handleLogOut = async () => {
        await firebase.auth().signOut();
    };

    render() {
        return (
            <AppContainer/>
        )
    }
}
