
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AppRegistry, Button,  Dimensions, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFetchBlob from 'rn-fetch-blob';
import { NativeModules } from 'react-native';
global.test = 'truc';
global.origin = 'null';
let { width: screenWidth } = Dimensions.get('window')

var RNImgToBase64 = NativeModules.RNImgToBase64;

interface State { // Added this interface for props
    torchon: RNCamera
    loading: boolean
}

interface Props {
    navigation: any
}

export class AppareilPhoto extends React.Component<{}, State, Props>{
    constructor(props: State) {
        super(props);
        this.state = {
            torchon: RNCamera.Constants.FlashMode.off,
            loading: false
        };
    }
    saveBase64Image(base64) {
        const dirs = RNFetchBlob.fs.dirs
        const file_path = dirs.DocumentDir + "/base64.jpg"
        RNFetchBlob.fs.unlink(file_path);
        RNFetchBlob.fs.createFile(file_path, base64, 'base64')
            .then((res) => {
                console.log('test save ' + res);
                console.log('save');
            })
            .catch((error) => {
                console.log("fetch blob " + error);
            });

    }

    async takePicture(camera) {
        this.setState({ loading: true })

        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        console.log('present  ')
        var photo = await RNImgToBase64.getBase64String(data.uri);
        // console.log(photo);
        global.origin = data.uri;
        global.test = photo;
        this.saveBase64Image(photo);
        this.props.navigation.navigate('Test');

        this.setState({ loading: false })
    };

    async toggleTorch() {
        let tstate = this.state.torchon;
        if (tstate == RNCamera.Constants.FlashMode.off) {
            tstate = RNCamera.Constants.FlashMode.on;
        } else {
            tstate = RNCamera.Constants.FlashMode.off;
        }
        this.setState({ torchon: tstate })
    }

    render() {
        const { torchon } = this.state;

        return (
            <View style={styles.container}>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                >
                    {({ camera, status }) => {
                        if (status !== 'READY') return (
                            < View
                                style={{
                                    flex: 1,
                                    backgroundColor: 'lightgreen',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text>Waiting</Text>
                            </View>
                        );
                        return (
                            <>
                                {
                                    this.state.loading ? 
                                    <Image source={require('../assets/icons/loading.png')} 
                                    style={{ alignItems: 'center', justifyContent: 'center', height:80, width:80}}/>
                                    :
                                    <></>
                                }
                                <TouchableOpacity style={styles.flash} onPress={() => this.toggleTorch()}>
                                    {this.state.torchon == RNCamera.Constants.FlashMode.off ?
                                        <Image style={styles.flashlite} source={require('../assets/icons/flash_off_icon.png')} /> :
                                        <Image style={styles.flashlite} source={require('../assets/icons/flash_on_icon.png')} />}
                                </TouchableOpacity>

                                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <View>
            <View style={styles.barre}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Photos')}
                    style={styles.Photos}
                >
                    <Image source={require('../assets/icons/photo_icon.png')}
                        resizeMode='contain'
                        style={{
                            position: 'absolute',
                            width: 30,
                            height: 30,
                            left: 5,
                            bottom: 0
                            //tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                    />
                    <Text
                        style={{
                            //color: focused ? '#e32f45' : '#748c94',
                            position: 'absolute',
                            fontSize: 10,

                        }}>
                        PHOTOS
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.AppareilPhoto}
                onPress={() => this.takePicture(camera)}
                >
                    <Image
                        source={require('../assets/icons/appareilphoto_icon.png')}
                        resizeMode='contain'
                        style={{
                            position:'absolute',
                            left:20,
                            bottom:20,
                            width: 30,
                            height: 30,
                            tintColor: '#fff'

                        }}
                    />
                </TouchableOpacity>
                
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Albums")}
                style={styles.Album}
                >
                    <Image source={require('../assets/icons/album_icon.png')}
                        resizeMode='contain'
                        style={{
                            position: 'absolute',
                            width: 30,
                            height: 30,
                            right: 5,
                            bottom: 0
                            //tintColor: focused ? '#e32f45' : '#748c94'
                        }}
                    />
                    <Text
                        style={{
                            //color: focused ? '#e32f45' : '#748c94',
                            position: 'absolute',
                            fontSize: 10,
                            right: 0,
                        }}>
                        ALBUMS
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
                                </View>
                            </>
                        );
                    }}
                    
                </RNCamera>
<<<<<<< HEAD
                <BottomBar navigation={this.props.navigation} />
=======
                
>>>>>>> 9e9f52583684caad9763ce6ee0a2daf7c961f413
            </View >
        );
    }
}

export default AppareilPhoto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
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
        marginBottom: 120
    },
    flash: {
        flex: 0,
        borderRadius: 5,
        padding: 5,
        alignSelf: 'center',
        position: "absolute",
        top: 20,
        right: 20
    },
<<<<<<< HEAD
    flashlite: {
        width: 50,
        height: 50,
=======
    flashlite:{
        width:50, 
        height:50, 
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    barre: {
        borderRadius: 30,
        // position: 'absolute',
        bottom:50 ,
        backgroundColor: '#8fcbbc',
        height: 80,
        width: screenWidth -  40,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    AppareilPhoto: {
        position: 'absolute',
        bottom: 5,
        left: 125,
        borderRadius: 35,
        height: 70,
        width: 70,
        backgroundColor: '#e32f45'
    },
    Album: {
        position: 'absolute',
        width: 50,
        height: 45,
        left: 40
    },
    Photos: {
        position: 'absolute',

        width: 50,
        height: 45,
        right: 40
>>>>>>> 9e9f52583684caad9763ce6ee0a2daf7c961f413
    }

});