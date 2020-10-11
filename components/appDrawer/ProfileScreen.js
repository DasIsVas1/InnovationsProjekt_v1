
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import Header from "./Header";

export default class ProfileScreen extends React.Component {
    state={
        clicked:false,
        btnTitle:'Aktiver den rigtige font!'
    }

    onPress = () => {

        if(!this.state.clicked){
            this.setState({
                btnTitle: 'Gå tilbage',
                clicked: true
            })
        }else {
            this.setState({
                btnTitle: 'Aktiver den rigtige font',
                clicked: false
            })
        }
    };

    render() {
        return (
            <View style={[styles.mainContainer]}>
                <Header navigation={this.props.navigation} title='ProfilScreen'/>
                <View style={styles.imageContainer}>
                    <Image source = {{uri:'https://i.redd.it/i8t6f16vdd421.jpg'}}
                           style = {{ width: 200, height: 200 }}/>
                    <Text
                        style={[this.state.clicked ? styles.font1 : styles.font2]}
                    >
                        Eigil Kjærullf
                    </Text>
                    <Button
                        title={this.state.btnTitle}
                        onPress={this.onPress}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',

    },
    imageContainer:{
        height: 250,
        alignItems: 'center',
    },
    header: {
        marginBottom: 70,
        flex: 0.1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 35,
    },
    body:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderColor: 'black',
        height: 230,
        borderWidth: 1,
    }
});