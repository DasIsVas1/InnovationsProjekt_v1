import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Linking, FlatList, Button, Image,} from 'react-native';
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


export default class App extends React.Component {

    cameraRef = React.createRef();

    // Sætter de forsekllige states til at være hhv null og false altså tomme
    state = {
        hasCameraPermission: null,
        isClicked: false,
        cameraPosition: Camera.Constants.Type.front,
    };

    // Når kameraret tages i brug tjekkes der om der er givet tilladelse til at bruge kameraet og at der kan navigeres
    // frem og tilbage uden at kameraet gåe i sort
    componentDidMount() {
        this.updateCameraPermission();
        this.updateNavigation();
    }

    // Sørger for at kameraet ikke går i sort ved brug af navigation
    updateNavigation = async () => {
        const {navigation} = this.props;
        navigation.addListener('willFocus', () =>
            this.setState({focusedScreen: true})
        );
        navigation.addListener('willBlur', () =>
            this.setState({focusedScreen: false})
        );
    }

    // Få adgang til kamera
    updateCameraPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
    };

    // Står for at billedet bliver taget og gemmer det til kamera galleriet
    handleTakePhoto = async () => {
        if (!this.cameraRef.current) {
            return;
        }
        const result = await this.cameraRef.current.takePictureAsync();
        //this.props.navigation.navigate(PHOTO_PREVIEW,{lastPhoto: result.uri})
        this.setState({lastPhoto: result.uri});
        this.handleSaveToCameraRoll(this.state.lastPhoto)
    };

    // Står for at gemme billedet til enhends billede galleri
    handleSaveToCameraRoll = async uri => {
        try {
            await MediaLibrary.createAssetAsync(uri, 'photo');

        } catch (error) {
            console.error(error);
        }
    };

    // Gå til indstillinger for at give kamera tilladelse
    handleSettingLink = () => {
        Linking.openSettings()
    };

    // Står for at brugeren kan skifte mellem front og back kamera
    handleChangeCamera = () => {
        if (this.state.isClicked) {
            this.setState({cameraPosition: Camera.Constants.Type.front})
            this.setState({isClicked: false})
        } else {
            this.setState({cameraPosition: Camera.Constants.Type.back})
            this.setState({isClicked: true})
        }
    }

    // Render det view hvori kameraet fremgår
    renderCameraView() {
        const {hasCameraPermission, type} = this.state;
        if (hasCameraPermission === null) {
            return <View/>;
        }
        if (hasCameraPermission === false) {
            return (
                <View>
                    <Text>No access to camera.</Text>
                    <Button onPress={this.handleSettingLink} title='Get permissions to access camera'> </Button>
                </View>
            );
        }
        return (
            <View>
                <View>
                    <Image style={styles.logo}
                           source={{uri: "https://images.rawpixel.com/image_png_900/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczY3LXBvbS0yNzMxLnBuZw%3D.png?s=zaT7Gqgj60wShPhABbOPubDqT3QI9zk8AelBQM9ldhI"}}/>

                    <Camera
                        style={styles.cameraView}
                        type={this.state.cameraPosition}
                        ref={this.cameraRef}
                    />

                </View>

                <Button style={styles.btn} title="Press to take photo" onPress={this.handleTakePhoto}/>
                <Button style={styles.btn} title="Switch Camera" onPress={this.handleChangeCamera}/>
            </View>
        );
    }


    /*
    --------------------------------------- MAIN RENDER ---------------------------------------
     */

    render() {
        const {hasCameraPermission, focusedScreen} = this.state;
        if (hasCameraPermission === null) {
            return <View/>
        } else if (hasCameraPermission === false) {
            return <Text>No Access to camera</Text>
        } else if (focusedScreen) {
            return (

                <View style={styles.cameraContainer}>
                    <Text style={styles.textContainer}>Test dit mundbind</Text>
                    {this.renderCameraView()}
                </View>
            )
        } else {
            return <View/>
        }
    }
}

/*
 --------------------------------------- STYLING -------------------------------------------
  */

const containerStyle = {};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    textContainer: {
        fontSize: 20,
        marginTop: 50,
        marginBottom: 20,
        textAlign: 'center',
    },
    btn: {
        margin: 100
    },
    Flatlist_render: {
        width: '100%'
    },
    cameraContainer: {
        // Her pakkes fælles style ud
        ...containerStyle,
        backgroundColor: '#FFFFFF',
    },
    mundbindContainer: {},
    cameraView2: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0.2, 0.2, 0.2, 0.2)',
        alignItems: 'center',
        justifyContent: 'space-around',
        aspectRatio: 1.0,

    },
    cameraView: {
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 5,
        marginRight: 5,
        width: '100%',
        height: 600,

    },
    lastPhotoContainer: {
        backgroundColor: '#DFF',
        width: '100%',
        height: 130,
        margin: 0
    },
    galleryContainer: {
        ...containerStyle,
        backgroundColor: '#FDF',
        marginBottom: 100
    },
    thumbnail: {
        width: 110,
        height: 110,
        marginLeft: 140
    }, thumbnail2: {
        width: 200,
        height: 200,
        margin: 10,
    },
    FlatList_image: {
        width: 200,
        height: 200,
        margin: 5
    },
    galleryView: {
        height: 150,
        width: '100%',
        flexDirection: 'row',
    },
});