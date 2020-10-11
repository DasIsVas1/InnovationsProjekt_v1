import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import DesignMBScreen from "./components/UnusedComponents/DesignMBScreen";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import SettingStackNavigation from "./components/UnusedComponents/SettingStackNavigation";
import {Entypo} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import CameraScreen from "./components/Screens/CameraScreen";
import UserScreen from "./components/Screens/UserScreen";
import * as firebase from "firebase";
import SignUpForm from "./components/LoginComponent/SignUpForm";
import LoginForm from "./components/LoginComponent/LoginForm";
import ProfileScreen from "./components/LoginComponent/ProfileScreen";
import Card from "react-native-paper";

/*
Husk at begge skal importeres.
1. skal vi have en container med som bruges i default (rd. "MAIN") metoden
2. skal vi have importer selve bottom navigation componenten
 */


/*
------------------------------------------ LOGIN ------------------------------------------
 */


/*
------------------------------------------ LOGIN END --------------------------------------
 */

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


export default createAppContainer(tabNavigator);