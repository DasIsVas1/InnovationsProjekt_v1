import React, {Component} from 'react'
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';



/*
Denne klasse står for at brugeren kan skifte design/designe sit eget mundbind
som meget gerne skulle parses til kameraet som et filter.
Dette er dog ikke tilfældet og derved er det tiltænkt at det kan videreudvikles på.
 */

export default class DesignMBScreen extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
            type: 'engangs',
            farve: 'blå',

        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu(event) {

        if (!this.dropdownMenu.contains(event.target)) {

            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', this.closeMenu);
            });

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textContainer2}>Design dit eget mundbind</Text>
                <Image style={styles.logo}
                       source={{uri: "https://images.rawpixel.com/image_png_900/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczY3LXBvbS0yNzMxLnBuZw%3D.png?s=zaT7Gqgj60wShPhABbOPubDqT3QI9zk8AelBQM9ldhI"}}
                />

                <View style={styles.btn1}>
                    <Button title="Indsæt eget billed"/>
                </View>


                <View style={styles.dropdownContainer}>
                    <Text style={styles.textContainer}>Vælg type</Text>
                    <DropDownPicker
                        items={[
                            {label: 'Engangs', value: 'engangs', hidden: true},
                            {label: 'Stof', value: 'stof',},

                        ]}
                        defaultValue={this.state.type}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                            country: item.value
                        })}
                    />
                </View>
                <View style={styles.dropdownContainer}>
                    <Text style={styles.textContainer}>Vælg farve</Text>
                    <DropDownPicker
                        items={[
                            {label: 'Blå', value: 'blå', hidden: true},
                            {label: 'Rød', value: 'rød',},
                            {label: 'Grøn', value: 'grøn', },
                            {label: 'Lilla', value: 'lilla', },
                            {label: 'Sort', value: 'sort', },
                            {label: 'Hvid', value: 'hvid', },
                        ]}
                        defaultValue={this.state.farve}
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                            farve: item.value
                        })}
                    />
                </View>

            </View>

        );
    };
}

/*
------------------------------------------ STYLESHEET --------------------------------------
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b5b5b5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdownContainer: {
        width: 290,
    },
    btn1: {
        width: "75%",
        marginTop: 5,
        padding: 10,
    },
    textContainer: {
        marginTop: 1,
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    },
    textContainer2: {
        fontSize: 35,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    },
    logo: {
        width: "90%",
        height: 200,
        margin: 10,
        borderRadius: 20,

    },
});

/*
<View style={styles.btn1}>
                    <Button title="Blå"/>
                </View>
                <View style={styles.btn1}>
                    <Button title="Rød"/>
                </View>
                <View style={styles.btn1}>
                    <Button title="Grøn"/>
                </View>
                <View style={styles.btn1}>
                    <Button title="Lilla"/>
                </View>
                <View style={styles.btn1}>
                    <Button title="Sort"/>
                </View>
                <View style={styles.btn1}>
                    <Button title="Hvid"/>
                </View>
                <View style={styles.btn1}>
                    <Button title="Indsæt billede på mundbind"/>
                </View>
 */