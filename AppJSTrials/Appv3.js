import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DesignMBScreen from "./components/DesignMBScreen";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import SettingStackNavigation from "./components/SettingStackNavigation";
import {Entypo} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import CameraScreen from "./components/Screens/CameraScreen";
import {createStackNavigator} from "react-navigation-stack";
import SettingsScreen from "./components/Screens/SettingsScreenOld";

/*
Husk at begge skal importeres.
1. skal vi have en container med som bruges i default (rd. "MAIN") metoden
2. skal vi have importer selve bottom navigation componenten
 */


/*

 */

const designStack = createStackNavigator({
    design: {
        screen: DesignMBScreen
    }
})
const cameraStack = createStackNavigator({
    camera: {
        screen: CameraScreen
    }
})
const settingsStack = createStackNavigator({
    settings: {
        screen: SettingsScreen
    }
})

const tabNavigator = createBottomTabNavigator({
    Design: designStack,
    Camera: cameraStack,
    Settings: settingsStack

});

export default createAppContainer(tabNavigator);