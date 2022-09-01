import { Left } from 'native-base';
import React from 'react';
import { View, Text, TextInput,StyleSheet, Image } from 'react-native';
import TemplateImage from '../logos/Photo';

const HeaderBlock = () => {
    return (
        <View style={styles.crea_container}>
            <Image
            source={require('../../assets/icons/setting_icon.png')}
            style={styles.setting}/>
            <Text style={styles.title}>Galerie</Text>
            <Image
            source={require('../../assets/icons/search_icon.png')}
            style={styles.search}/>
            <TextInput
            placeholder="Rechercher des photos"
            style={styles.input}/>
        </View>
    );
}

const styles = StyleSheet.create({
    crea_container: {
        width: "100%",
        height: 125,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: "grey"
    },
    title:{
        position: 'absolute',
        left:20,
        top:25,
        fontSize:24
    },
    input:{
       position:'absolute',
       left:50 ,
       top:60,
       borderWidth:0.75,
       paddingTop:1.5,
       paddingBottom:1.5
    },
    search:{
        position:'absolute',
        left:15,
        top:55,
        height:40,
        width:40
    },
    setting:{
        position:'absolute',
        right:15,
        top:15,
        height:40,
        width:40
    }
})
export default HeaderBlock;