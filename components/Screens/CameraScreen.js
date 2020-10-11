import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Linking, FlatList, Button, Image,} from 'react-native';
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


export default class App extends React.Component {


    cameraRef = React.createRef();

    state = {
        hasCameraPermission: null,
        isClicked: false,
        cameraPosition: Camera.Constants.Type.front,
        lastPhoto: null,
        hasCameraRollPermission: null,
        galleryImages: null,
        showGallery: false
    };

    componentDidMount() {
        this.updateCameraPermission();
        this.updateCameraRollPermission();
        this.updateNavigation();


    }

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

    //Få adgang til galleriet
    updateCameraRollPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({hasCameraRollPermission: status === 'granted'});
    };


    handleTakePhoto = async () => {
        if (!this.cameraRef.current) {
            return;
        }
        const result = await this.cameraRef.current.takePictureAsync();
        this.setState({lastPhoto: result.uri});
        this.handleSaveToCameraRoll(this.state.lastPhoto)
    };

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

    // Håndter at skifte kamera mellem foran og bagved
    /*
    handleChangeCamera = () => {
      if (this.state.isClicked) {
        this.setState({cameraPosition: Camera.Constants.Type.front})
        this.setState({isClicked: false})

      } else {
        this.setState({cameraPosition: Camera.Constants.Type.back})
        this.setState({isClicked: true})
      }
      console.log(this.state.cameraPosition)
    }

     */

    handleChangeCamera = () => {
        if (this.state.isClicked) {
            this.setState({cameraPosition: Camera.Constants.Type.front})
            this.setState({isClicked: false})
        } else {
            this.setState({cameraPosition: Camera.Constants.Type.back})
            this.setState({isClicked: true})
        }
    }

    handleLoadGalleryImages = async () => {
        try {
            const result = await MediaLibrary.getAssetsAsync({first: 20});
            this.setState({galleryImages: result.assets});

        } catch (error) {
            console.log(error)
        }
    };

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
                <Camera
                    style={styles.cameraView}
                    type={this.state.cameraPosition}
                    ref={this.cameraRef}>
                </Camera>
                <Button style={styles.btn} title="Press to take photo" onPress={this.handleTakePhoto}/>
                <Button style={styles.btn} title="Switch Camera" onPress={this.handleChangeCamera}/>
            </View>
        );
    }

    /*
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
                    <Camera
                        style={styles.cameraView}
                        type={this.state.cameraPosition}
                        ref={this.cameraRef}>
                    </Camera>
                    <Button style={styles.btn} title="Press to take photo" onPress={this.handleTakePhoto}/>
                    <Button style={styles.btn} title="Switch Camera" onPress={this.handleChangeCamera}/>
                </View>
            );
        }

     */

    renderGalleryView() {
        // Vi har ingenting så længe vi venter på input fra brugeren
        const {hasCameraRollPermission, galleryImages} = this.state;
        if (hasCameraRollPermission === null) {
            return <View/>

        }
        // Viser en fejlbesked og en knap til settings hvis brugeren ikke har accepteret adgang
        if (hasCameraRollPermission === false) {
            return (
                <View>
                    <Text>No access to camera roll</Text>
                    <Button title="Go to settings" onPress={this.handleSettingLink}/>
                </View>
            );
        }
        return (
            <View>
                <Button title="Load images" onPress={this.handleLoadGalleryImages}/>
                <View style={styles.galleryView}>
                    {galleryImages && (
                        <FlatList
                            horizontal
                            styles={styles.Flatlist_render}
                            data={galleryImages}
                            // Vi sender vores item, som er den enkelte user, med som prop til UserItem
                            // Vi sender også vores event handler med som prop, så UserItem ikke skal håndtere navigation
                            // this.handleSelectUser modtager en user som argument
                            renderItem={({item}) => (
                                <Image
                                    source={{uri: item.uri}}
                                    key={item.uri}
                                    style={styles.FlatList_image}
                                />
                            )}
                            keyExtractor={item => item.id}
                        />
                    )}
                </View>
            </View>
        );
    }

    renderLastPhoto() {
        // her viser vi det seneste tagne billede
        const {lastPhoto} = this.state;
        if (!lastPhoto === null) {
            return <View/>;
        }
        return (
            <View style={styles.lastPhotoContainer}>
                <Text style={{marginLeft: 160}}>Last Photo</Text>
                <Image source={{uri: lastPhoto}} style={styles.thumbnail}/>
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


    /*
        render() {
            const isFocused = this.props.navigation.isFocused();

            if (!isFocused) {
                return null;
            } else if (isFocused) {
                return (

                    <View style={styles.cameraContainer}>
                        <Text style={styles.textContainer}>Test dit mundbind</Text>
                        {this.renderCameraView()}
                    </View>
                )
            }
        }

     */


    /*
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.cameraContainer}>{this.renderCameraView()}</View>
                <View style={styles.lastPhotoContainer}>{this.renderLastPhoto()}</View>
                <View style={styles.galleryContainer}>{this.renderGalleryView()}</View>


            </SafeAreaView>
        )
    }
     */

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
        marginTop: 100,
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
    mundbindContainer: {

    },
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
        aspectRatio: 1.0,
        width: '100%',
        height: 400,

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