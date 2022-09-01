import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
import HeaderBlock from '../components/blocs/Header'
import {  NavigationParams, withNavigation, NavigationInjectedProps } from 'react-navigation'


let albums = require('../assets/db_test/albums.json');
let { width: screenWidth, height: ScreenHeight } = Dimensions.get('window')

interface PropsInject extends NavigationInjectedProps{
    id_photo :string
}

interface Props extends NavigationParams {
    
}

class Album extends React.Component<Props, PropsInject> {
    constructor(props) {
        super(props);
    }

    renderImages = item => {
        var type_album =""
        if(this.props.route.params.index_album_type === 0){
            type_album = "Photo_Selected_Perso"
        }
        else{
            type_album = "Photo_Selected_Shared"
        }
        console.log(type_album)
        return (
            <View style={{ alignItems: "baseline", paddingTop: 10, paddingRight: 10 }}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate({ name: type_album}, 
                    {id_photo : item.item.id})}>
                    <Image source={{ uri: item.item.path }} style={{
                        height: (screenWidth - 20) / 3,
                        width: (screenWidth - 20) / 3,
                    }} />
                </TouchableOpacity>

            </View>
        )
    }
    render() {
        const id_album = this.props.route.params.id_album
        const index_album_type = this.props.route.params.index_album_type
        const name_album = this.props.route.params.name_album

        return (
            <>
                <HeaderBlock />
                <Text style={styles.title}>{name_album}</Text>
                <TouchableOpacity style={styles.backward} onPress={() => this.props.navigation.navigate('Albums')}>
                    <Image
                        source={require('../assets/icons/backward_icon.png')}
                        style={styles.image_backward} />
                </TouchableOpacity>
                <View style={styles.photo_container}>
                    <FlatList
                        horizontal={false}
                        numColumns={3}
                        data={albums[index_album_type][id_album].photos}
                        renderItem={this.renderImages}
                        keyExtractor={(item, index) => index.toString()}
                    >
                    </FlatList>
                </View>
            </>
        );
    }
}
export default withNavigation(Album);

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
        height: ScreenHeight
    },
    title: {
        position: 'relative',
        top: 20,
        left: 20,
        fontSize: 16
    },
    title2: {
        position: 'relative',
        top: 100,
        left: 20,
        fontSize: 16
    },
    backward: {
        position: 'absolute',
        right: 30,
        top: 140,
    },
    image_backward: {
        height: 40,
        width: 40
    },

});