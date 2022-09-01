import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PhotoLine from './photoLine';

const PhotoBloc = () => {
    return(
            <View style={styles.container}>
                <Text style={styles.title}>Mes Photos</Text>
                <PhotoLine></PhotoLine>
                <PhotoLine></PhotoLine>
            </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        margin:5,
        backgroundColor:"white"
    },
    title: {
        margin:15,
        fontSize:20
    }
})
export default PhotoBloc;