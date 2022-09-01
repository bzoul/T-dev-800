import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
import HeaderBlock from '../components/blocs/Header'
import {NavigationInjectedProps, withNavigation} from 'react-navigation'

interface Props extends NavigationInjectedProps {
    id_photo: number
}

let pictures = require('../assets/db_test/pictures.json');
let { width: screenWidth, height: ScreenHeight } = Dimensions.get('window')

class Photos_Shared extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderImages = item => {

        return (

            <View style={{ alignItems: "baseline", paddingTop: 10, paddingRight: 10 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Photo_Selected_Shared', {
                     id_photo : item.item.id
                })}>
                <Image source={{ uri: item.item.path }} style={{
                    width: (screenWidth - 20) / 3,
                    height: (screenWidth - 20) / 3,
                }} />
                </TouchableOpacity>
            </View>


        )
    }

    render() {
        return (
            <>

                <HeaderBlock />
                <Text style={styles.title}>Photos partagées avec moi</Text>
                <TouchableOpacity style={styles.backward} onPress={() => this.props.navigation.navigate('Photos')}>
                    <Image
                    source={require('../assets/icons/backward_icon.png')}
                    style={styles.image_backward}/>
                </TouchableOpacity>
                <View style={styles.photo_container}>
                    <FlatList
                        horizontal={false}
                        numColumns={3}
                        data={pictures[1]}
                        renderItem={this.renderImages}
                        keyExtractor={(item, index) => index.toString()}
                    >
                    </FlatList>
                </View>

            </>
        );
    }
}
export default withNavigation(Photos_Shared);

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
    photo_container_shared: {
        position: 'relative',
        top: 140
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
    backward:{
        position:'absolute',
        right: 30,
        top: 140,
    },
    image_backward: {
        height: 40,
        width: 40
    },  

});