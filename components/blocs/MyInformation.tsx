import React from 'react';
import {Text, TextInput, View , StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class MyInformation extends React.Component { 
    constructor(props) {
        super(props);
    }

    handleUsername = (e) => {
        this.props.updateUsername(e)
    }

    handleEmail = (e) => {
        this.props.updateEmail(e)
    }

    //lance la fonction updatePassword du composant Login
    handlePassword = (e) => {
        this.props.updatePassword(e)
    }

    handlePassword2 = (e) => {
        this.props.updatePassword2(e)
    }

    render (){
        return (
            <View style={styles.crea_container}>
                <TextInput
                    style={[styles.input_text, styles.width]}
                    placeholder="Username"
                    onChangeText={text => this.handleUsername(text)}
                    placeholderTextColor='grey'
                    color='black'
    
                />
                <TextInput
                    style={[styles.input_text, styles.width]}
                    placeholder="@ email"
                    onChangeText={text => this.handleEmail(text)}
                    placeholderTextColor='grey'
                    color='black'
    
                />
                <TextInput
                    style={[styles.input_text, styles.width]}
                    placeholder="Password"
                    onChangeText={text => this.handlePassword(text)}
                    placeholderTextColor='grey'
                    secureTextEntry={true}
                    color='black'
                />
                <TextInput
                    style={[styles.input_text, styles.width]}
                    placeholder="Password"
                    onChangeText={text => this.handlePassword2(text)}
                    placeholderTextColor='grey'
                    secureTextEntry={true}
                    color='black'
                />
            </View>
        );
    }
    
    }

const styles = StyleSheet.create ({
    crea_container: {
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
    },
    input_text: {
        height:40,
        borderWidth:2,
        marginBottom:10,
        borderColor: 'grey',
        backgroundColor:'white',
        borderRadius: 5
    },
    width: {
        width:"100%"
    }

})

