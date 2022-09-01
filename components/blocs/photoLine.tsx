import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TemplateImage from '../logos/Photo';

const PhotoLine = () => {
    return(
            <View style={styles.crea_container}>
                <TemplateImage/>
                <TemplateImage/>
                <TemplateImage/>
            </View>
    );
}

const styles = StyleSheet.create ({
    crea_container: {
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
})
export default PhotoLine;