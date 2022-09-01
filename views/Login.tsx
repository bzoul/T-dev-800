import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Button } from 'react-native';
import LogButton from '../components/buttons/LogButton';
import LogInput from "../components/inputs/LogInput";
import axios from 'axios';


interface State{
    navigation: any
}

export class LogIn extends React.Component<State>{
    constructor(props:State) {
        super(props);
        this.state={
            email: null,
            password: null,            
        };
    }

    //met a jour l'etat de email dans Loginput
    updateEmail = (data) => {
        this.setState({email:data})
        // data should be 'child data' when the
        // Test button in the child component is clicked
    }

    //met a jour l'etat de password dans Loginput
    updatePassword = (data) => {
        this.setState({password:data})
        // data should be 'child data' when the
        // Test button in the child component is clicked
    }

    log (){
        var log = this.state.email;
        var pass = this.state.password;
        const json = JSON.stringify(
                    {email: log,
                    password: pass
                    });
        axios.post(
            `https://localhost:3310/api/users/login`, json)
          .then((response) => {
            // handle success
            console.log('vivant');
            
          },(error) => {
        //     // handle error
        //     console.log (log+ "  s  "+ pass)
        //     console.log(error.request);
        // console.log(error.message);
        // console.log(error.config);
        console.log('mort')
          });
    }

    render() {
        const image = { uri: "https://cdn.discordapp.com/attachments/786976841851732038/830091403409358888/dzqdzqdzqd.png" };
        return (
            <View style={styles.main_container}>
                <ImageBackground source={image} style={styles.image}>
                    <Text style={styles.title}>Taking pictures is your talent, Saving them as they are is ours</Text>
                    <View style={styles.snd_container}>
                        <LogInput updateEmail={val => this.updateEmail(val)} updatePassword={val => this.updatePassword(val)} />
                        <LogButton title="SIGN IN" backgroundColor="#ed1f5d" Press={() => this.props.navigation.navigate("Albums")}/>
                        <View style={styles.register}>
                            <Text>First time with us?</Text>
                            <LogButton title="SIGN UP" backgroundColor="" Press={() => this.props.navigation.navigate("Register")}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default LogIn;

const styles = StyleSheet.create({
    main_container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: "white",
        borderColor: "white",
        textAlign: "center",
        margin: "5%"
    },
    snd_container: {
        width: "80%",
        backgroundColor: 'white',
        borderWidth: 2,
        padding: 20,
        borderColor: 'grey',
        borderRadius: 5,
    },
    register: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
