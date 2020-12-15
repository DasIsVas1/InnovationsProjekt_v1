import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import Header from "./Header";
import DropDownPicker from "react-native-dropdown-picker";

/*
Denne klasse er blot en enkelt screen som viser at der kan tilføjes flere screens til appDrawer
 */

export default class KoebsScreen extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
            type: 'engangs',
            design: 'eget',

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
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation} title='Købs Screen'/>
                <Text style={styles.textContainer}>Indtast addrese oplysninger og vælg derefter type og design</Text>

                <TextInput style={styles.inputField} placeholder="Navn"/>
                <TextInput style={styles.inputField} placeholder="Adresse"/>

                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.inputField2} placeholder="By"/>
                    <TextInput style={styles.inputField3} placeholder="Post nummer"/>
                </View>

                <TextInput style={styles.inputField} placeholder="Land"/>
                <TextInput style={styles.inputField} placeholder="Kortnummer"/>


                <View style={{flexDirection: 'row'}}>
                    <TextInput style={styles.inputField2} placeholder="Udløbs Dato mm/yy"/>
                    <TextInput style={styles.inputField3} placeholder="CCV"/>
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
                    <Text style={styles.textContainer}>Vælg design</Text>
                    <DropDownPicker
                        items={[
                            {label: 'Eget design', value: 'eget', hidden: true},
                            {label: 'Rød', value: 'rød',},
                            {label: 'Grøn', value: 'grøn', },
                            {label: 'Lilla', value: 'lilla', },
                            {label: 'Sort', value: 'sort', },
                            {label: 'Hvid', value: 'hvid', },

                        ]}
                        defaultValue={this.state.design}
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








                <View style={styles.bottom}>
                    <Button title="Køb"/>
                </View>

            </View>

        );
    }
}

/*
------------------------------------------ STYLESHEET --------------------------------------
 */

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
    },
    btn1: {
        width: "75%",
        marginTop: 10,
        padding: 10,
    },
    btn2: {
        justifyContent: 'center',
        flexDirection: "row",
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        alignItems: 'center',
        width: "100%"
    },
    btn: {
        padding: 40,
        borderRadius: 10
    },
    btn_txt: {
        color: 'white'

    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        alignItems: 'center',
        width: "75%",
    },
    inputField2: {
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        width: "58%"
    },
    inputField3: {
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        width: "15%"
    },
    textContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
    },
    dropdownContainer: {
        width: 290,
    },
    textContainer2: {
        marginTop: 1,
        fontSize: 20,
        color: '#FFFFFF',
        textAlign: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36,
        width: "75%",
        marginTop: 10,
        padding: 10,
    },
});
