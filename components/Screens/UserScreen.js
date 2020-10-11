import React from 'react';
import {StyleSheet, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from "react-navigation-drawer";
import HomeScreen from "../appDrawer/HomeScreen";
import ProfileScreen from '../appDrawer/ProfileScreen';
import PlatformScreen from '../appDrawer/PlatformScreen';
import {createAppContainer} from "react-navigation";


const MyDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Profile: {
            screen: ProfileScreen
        },
        Platform: {
            screen: PlatformScreen
        }
    });

const AppContainer = createAppContainer(MyDrawerNavigator)

export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}
