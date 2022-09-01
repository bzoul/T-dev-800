import React from 'react'
import { View, StyleSheet, ImageBackground, Text, Touchable } from 'react-native'
import LogButton from '../components/buttons/LogButton'
import MyInformation from "../components/blocs/MyInformation"
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios';


interface State{
    navigation: any
}

export class Register extends React.Component<State>{
    constructor(props:State) {
        super(props);
        this.state={
            email: null,
            password: null,
            password2: null,
            username: null         
        };
    }

    updateUsername = (data) => {
        this.setState({username:data})
        console.log(this.state.username)
    }
    
    updateEmail = (data) => {
        this.setState({email:data})
        console.log(this.state.email)

    }

    updatePassword = (data) => {
        this.setState({password:data})
        console.log(this.state.password)

    }

    updatePassword2 = (data) => {
        this.setState({password2:data})
        console.log(this.state.password2)

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
                    <TouchableOpacity style={styles.backward} onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}> RETURN</Text>
                    </TouchableOpacity>
                    <View style={styles.snd_container}>
                        <MyInformation 
                        updateEmail={val => this.updateEmail(val)} 
                        updatePassword={val => this.updatePassword(val)}
                        updateUsername={val => this.updateUsername(val)} 
                        updatePassword2={val => this.updatePassword2(val)}
                    />
                        <LogButton title="REGISTER" backgroundColor="#ed1f5d" Press={() => this.props.navigation.navigate("Login")}/>
                    </View>
                    
                </ImageBackground>
                
            </View>
        )
    }
}
export default Register;

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
        },
        title: {
            fontSize: 25,
            color: "white",
            borderColor: "white",
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: "5%"
        },
        snd_container: {
            backgroundColor: 'white',
            margin: 20,
            padding: 30,
            borderWidth: 2,
            borderColor: 'grey',
            borderRadius: 5
        },
        backward: {
            justifyContent: 'center',
            alignItems: 'center',
            width:100,
            height:30,
            backgroundColor:'red',
            borderWidth: 1,
            borderRadius: 10,

        }
    })


