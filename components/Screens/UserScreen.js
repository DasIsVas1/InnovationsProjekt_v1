import React, {Component} from 'react';
import firebase from "firebase";
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import SignUpForm from "../LoginComponent/SignUpForm";
import LoginForm from "../LoginComponent/LoginForm";
import ProfileScreen from "../Screens/ProfileScreen";


export default class App extends Component {

    state = {user: null}

    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyB2Xe40c4U_1MrC9ffo6ubNDHod5RLpih0",
            authDomain: "innovationsprojektmbapp.firebaseapp.com",
            databaseURL: "https://innovationsprojektmbapp.firebaseio.com",
            projectId: "innovationsprojektmbapp",
            storageBucket: "innovationsprojektmbapp.appspot.com",
            messagingSenderId: "966473468096",
            appId: "1:966473468096:web:7e9b4bd1f9ed33c8e7c525"
        }

        /*
        Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
        Så undgår vi fejlen firebase App named [DEFAULT] already exists (app/duplicate-app)
         */

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            this.setState({user});
        });
    }

    render() {
        const {user} = this.state

        if (!user) {
            return (
                <View style={styles.container}>

                    <Card >
                        <SignUpForm />
                    </Card>

                    <Card >
                        <LoginForm/>
                    </Card>
                </View>
            )
        } else {
            return (
                <View>

                    <ProfileScreen user={user} />
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container2: {
        marginRight: 500,
        marginLeft: 500,
        marginTop: 50,

    }
});

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBxb08J6CgWoAnDwZ0J_DK8WVRpnifCcNI",
    authDomain: "innovationoevelse5.firebaseapp.com",
    databaseURL: "https://innovationoevelse5.firebaseio.com",
    projectId: "innovationoevelse5",
    storageBucket: "innovationoevelse5.appspot.com",
    messagingSenderId: "278880860352",
    appId: "1:278880860352:web:95a36307338c7ee9369525",
    measurementId: "G-3G6LP68GLP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
 */
