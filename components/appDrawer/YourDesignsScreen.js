import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Linking,
    FlatList,
    Button,
    Image,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import Header from "./Header";

/*
Denne klasse har til formål at skulle vise de billeder en bruger tager med det indbyggede kamera i appen
I bedste use case vil det designede mundbind kunne vises som et "filter" over kameraet hvorved der næst gemmes billedet med filteret og vises i "lastPhoto"
Virker dog ikke...
 */


export default class App extends React.Component {
    cameraRef = React.createRef();

    // Sætter de forsekllige states til at være hhv null og false altså tomme
    state = {
        isClicked: false,
        lastPhoto: null,
        hasCameraRollPermission: null,
        galleryImages: null,
        showGallery: false
    };

    // Når kameraret tages i brug tjekkes der om der er givet tilladelse til at få adgang til enhedens billede galleri
    componentDidMount() {
        this.updateCameraRollPermission();
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

    //Få adgang til galleriet
    updateCameraRollPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        this.setState({hasCameraRollPermission: status === 'granted'});
    };


    // Gå til indstillinger for at give kamera tilladelse
    handleSettingLink = () => {
        Linking.openSettings()
    };

    // Står for at få loade enhedens galleri. Virker dog ikke... uden at crashe appen
    handleLoadGalleryImages = async () => {
        try {
            const result = await MediaLibrary.getAssetsAsync({first: 20});
            this.setState({galleryImages: result.assets});

        } catch (error) {
            console.log(error)
        }
    };

    // Render de billeder der er i brugerens enheds billed galleri
    // Virker dog ikke uden at crashe appen
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
                <Button title="Load images" onPress={this.handleLoadGalleryImages}/>
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
        return (
            <View style={styles.mainContainer}>
                <Header navigation={this.props.navigation} title='Dine Designs'/>
                <SafeAreaView>
                    <View style={styles.lastPhotoContainer}>{this.renderLastPhoto()}</View>
                    <View style={styles.galleryContainer}>{this.renderGalleryView()}</View>
                </SafeAreaView>
            </View>
        )
    }

}

/*
 --------------------------------------- STYLING -------------------------------------------
  */

const containerStyle = {
    padding: 5,
    borderRadius: 1,
    margin: 4,
    borderWidth: 1,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
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
        backgroundColor: '#DDF',

    },
    cameraView: {
        marginTop: 100,
        marginLeft: 10,
        marginBottom: 15,
        aspectRatio: 1.2,
        width: '100%',
        height: 270
    },
    lastPhotoContainer: {
        backgroundColor: '#b5b5b5',
        width: '100%',
        height: 350,
        marginTop: 10,
        marginBottom: 10,
    },
    galleryContainer: {
        //...containerStyle,
        backgroundColor: '#d6d6d6',
        marginBottom: 10,

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
        height: 300,
        width: '100%',
        flexDirection: 'row',
    },
});