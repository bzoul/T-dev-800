import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import HeaderBlock from '../components/blocs/Header'
import BottomBar from '../components/blocs/BottomBar'
import { NavigationInjectedProps, withNavigation } from 'react-navigation'


let albums = require('../assets/db_test/albums.json');
let { width: screenWidth } = Dimensions.get('window')

interface Props extends NavigationInjectedProps {
    id_album: number,
    index_album_type: number
}

interface State { // Added this interface for props
    My_albums: [{
        id: number
        nom: string
        firstPhoto: string
        numberOfPhoto: number
    }]
    Shared_albums: [{
        id: number
        nom: string
        firstPhoto: string
        owner: string
    }]
}


class Albums extends React.Component<{}, State, Props> {
    constructor(props) {
        super(props);
        this.state = {
            My_albums: [{
                id: 0,
                nom: "",
                firstPhoto: "",
                numberOfPhoto: 0
            }],
            Shared_albums: [{
                id: 0,
                nom: "",
                firstPhoto: "",
                owner: ""
            }]
        }
    }

    UNSAFE_componentWillMount() {
        let myAlbums = [], sharedAlbums = []
        albums[0].map((album) => {
            let A = {
                id:album.id,
                nom: album.name,
                firstPhoto: album.photos[0].path,
                numberOfPhoto: album.photos.length + 1
            }
            myAlbums.push(A)
        })
        albums[1].map((album) => {
            let A = {
                id: album.id,
                nom: album.name,
                firstPhoto: album.photos[0].path,
                owner: album.owner
            }
            sharedAlbums.push(A)
        })

        this.setState({
            My_albums: myAlbums,
            Shared_albums: sharedAlbums
        })
    }

    renderImages = item => {
        return (
            <Text>{item.item.owner}</Text>
        )
    }
    render() {
        const { Shared_albums, My_albums } = this.state
        return (
            <View>
                <HeaderBlock />
                <View style={styles.photo_container}>
                    <Text style={styles.title}>Mes albums</Text>

                    <ScrollView horizontal >
                        {My_albums.map((album) => (
                            <View>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Album', {
                                    id_album : album.id,
                                    index_album_type : 0,
                                    name_album : album.nom
                                })}>
                                    <Image source={{ uri: album.firstPhoto }} style={{
                                        height: (screenWidth - 20) / 3,
                                        width: (screenWidth - 20) / 3,
                                        borderRadius: 25, 
                                        borderColor: 'black',
                                    }} />
                                </TouchableOpacity>

                                <Text style={{ fontSize: 12, left: 10 }}>{album.nom}</Text>
                                <Text style={{ fontSize: 10, left: 10 }}>{album.numberOfPhoto} éléments</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.photo_container_shared}>
                    <Text style={styles.title}>Albums partagés avec moi</Text>

                    <ScrollView horizontal>
                        {Shared_albums.map((album) => (
                            <View>
                                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Album', {
                                    id_album : album.id,
                                    index_album_type : 1,
                                    name_album : album.nom
                                })}>
                                    <Image source={{ uri: album.firstPhoto }} style={{
                                        height: screenWidth / 3,
                                        width: screenWidth / 3,
                                        borderRadius: 25,
                                        borderColor: 'black',
                                    }} />
                                </TouchableOpacity>

                                <Text style={{ fontSize: 12, left: 10 }}>{album.nom}</Text>
                                <Text style={{ fontSize: 10, left: 10 }}>{album.owner}</Text>
                            </View>

                        ))}
                    </ScrollView>
                </View>
                <BottomBar navigation={this.props.navigation} />
            </View>
        );
    }

}

export default withNavigation(Albums);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
    photo_container: {
        position: 'relative',
        top: 55,
        alignContent: 'center'
    },
    title: {
        position: 'relative',
        fontSize: 16,
        left: 20,
        top: -20
    },
    photo_container_shared: {
        position: 'relative',
        top: 110
    },
});
