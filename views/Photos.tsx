import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, ScrollView, TouchableOpacity } from 'react-native';
import HeaderBlock from '../components/blocs/Header'
import BottomBar from '../components/blocs/BottomBar'

let pictures = require('../assets/db_test/pictures.json');
let { width: screenWidth } = Dimensions.get('window')

interface State { // Added this interface for props
    My_photo: []
    Shared_photo: []
}
interface Props {
    navigation: any
  }
export class Photos extends React.Component<{}, State, Props>{
    constructor(props) {
        super(props);
        this.state = {
            My_photo: [],
            Shared_photo: []
        }
    }
    GetFirstPicture(Pictures) {
        let tab = []
        for (let i = 0; i < Pictures.length; i++) {
            if (i < 3) {
                tab.push(Pictures[i].path)
            }
            else { break; }
        }
        return tab
    }

    UNSAFE_componentWillMount() {
        let tab, tab1
        tab = this.GetFirstPicture(pictures[0])
        tab1 = this.GetFirstPicture(pictures[1])
        this.setState({
            My_photo: tab,
            Shared_photo: tab1
        })
    }

    render() {
        const { My_photo, Shared_photo } = this.state
        return (
            <View>
                <HeaderBlock />
                <View style={styles.photo_container}>
                    <Text style={styles.title}>Mes photos</Text>

                    <ScrollView  horizontal>
                        {My_photo.map((picturePath) => (
                            <Image source={{ uri: picturePath }} style={{
                                height: screenWidth / 3,
                                width: screenWidth / 3,
                            }} />
                        ))}
                    </ScrollView>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("My_Photos")}
                    >
                        <Image source={require('../assets/icons/right_icon.png')} style={styles.button_more} />
                    </TouchableOpacity>
                </View>

                <View style={styles.photo_container_shared}>
                    <Text style={styles.title}>Photos partagées avec moi</Text>
                    <ScrollView horizontal>
                        {Shared_photo.map((picturePath) => (
                            <Image source={{ uri: picturePath }} style={{
                                height: screenWidth / 3,
                                width: screenWidth / 3,
                            }} />
                        ))}
                    </ScrollView>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Photos_Shared")}
                    >
                        <Image source={require('../assets/icons/right_icon.png')} style={styles.button_more} />
                    </TouchableOpacity>
                </View>
                <BottomBar navigation={this.props.navigation}/>
            </View>
        );
    }

}

export default Photos;

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
    photo_container_shared: {
        position: 'relative',
        top: 90
    },
    title: {
        position: 'relative',
        fontSize: 16,
        left : 20,
        top: -20
    },
    button_more: {
        height: 30,
        width: 30,
        left:screenWidth-50
    }

});