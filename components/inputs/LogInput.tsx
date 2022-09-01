import React from 'react'
import {TextInput, View, StyleSheet } from 'react-native'

export default class LogInput extends React.Component { 
    constructor(props) {
        super(props);
    }

    //lance la fonction updateEmail du composant Login
    handleEmail = (e) => {
        this.props.updateEmail(e)
    }

    //lance la fonction updatePassword du composant Login
    handlePassword = (e) => {
        this.props.updatePassword(e)
    }
    
    
    render () {
        return (
        <View>
            <TextInput
            style={styles.input_text}
            onChangeText={text => this.handleEmail(text)}
            placeholder=" @ email"
            placeholderTextColor='grey'
            color='black'
            />
            <TextInput
            style={styles.input_text}
            secureTextEntry={true}
            onChangeText = {text => this.handlePassword(text)}
            placeholder=" Password"
            placeholderTextColor='grey'
            color='black'
            />    
            
        </View>
    );
    }
    
    }
const styles = StyleSheet.create ({
    input_text: {
        width:'100%',
        borderWidth:2,
        marginTop:15,
        borderColor: 'grey',
        backgroundColor:'white',
        borderRadius: 5
    },
})

