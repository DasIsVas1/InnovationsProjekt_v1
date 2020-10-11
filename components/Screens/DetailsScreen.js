import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";


export default class SettingsScreen extends Component {

    static navigationOptions = {
        title: 'Details'
    }
    handleGoToSettings = (route) => {
        this.props.navigation.navigate('Settings')
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer}>Dette er Details Screen </Text>
                <Button title="Take me to Settings Screen" onPress={this.handleGoToSettings}/>
            </View>
        );
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#249800',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textContainer: {
        fontSize: 100,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    }

});


/*
const stackNavigator = createStackNavigator(
    {
        Home: { screen: DesignMBScreen },
        Settings : { screen: SettingsScreenOld },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
         //   title: 'Main',
        },
    }
);
export default stackNavigator
 */


/*
export default class DetailsScreen extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.textContainer}>Dette er Details Screen </Text>
            </View>
        )
    }
}
 */
