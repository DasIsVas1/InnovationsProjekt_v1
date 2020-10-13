import React from 'react';
import {StyleSheet, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from "react-navigation-drawer";
import YourDesignsScreen from "../appDrawer/YourDesignsScreen";
import ProfileScreen from '../appDrawer/ProfileScreen';
import {createAppContainer} from "react-navigation";
import ExtraScreen from "./ExtraScreen";


const MyDrawerNavigator = createDrawerNavigator(
    {
        Designs: {
            screen: YourDesignsScreen
        },
        Profile: {
            screen: ProfileScreen
        },
        Extra: {
            screen: ExtraScreen
        },

    });

const AppContainer = createAppContainer(MyDrawerNavigator)

export default class App extends React.Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}
