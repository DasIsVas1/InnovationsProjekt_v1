import React, { useRef } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraView = () => {
    const cameraRef = useRef(null);
    const takePicture = async () => {
        if (cameraRef) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    return (
        <SafeAreaView style={styles.safeWrapper}>
            <View style={styles.container}>
                <RNCamera
                    ref={cameraRef}
                    style={styles.camera}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                />
                <View style={styles.snapWrapper}>
                    <TouchableOpacity onPress={takePicture} style={styles.capture}>
                        <Text style={styles.snapText}>SNAP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeWrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        position: 'relative',
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    snapWrapper: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        position: 'absolute',
        top: 50,
        left: 16,
        right: 16,
    },
    snapText: {
        fontSize: 14,
        color: 'red',
    },
});

export default CameraView;