import React from 'react';
import {View, Image, StyleSheet} from "react-native";

const TemplateImage = (test) => {

    return(
        <View style={styles.color}>
            <Image
                style={styles.Image}
                source={{uri: 'http://www.espaceinformatique.net/carousel/democarousel/lightbox2-master/lightbox2-master/dist/images/image-3.jpg'}}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    Image: {
        width: 100,
        height: 100,
        margin:10
    }

})
export default TemplateImage;