/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './views/Login';
import Register from './views/Register';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Albums from './views/Albums';
import AppareilPhoto from './views/AppareilPhoto';
import Photo_Selected_Perso from './views/Photo_Selected_Perso';
import Photos_Shared from './views/Photos_Shared';
import My_Photos from './views/My_Photos';
import Photo_Selected_Shared from './views/Photo_Selected_Shared';
import Photos from './views/Photos';
import Test from './views/Test';
import Tabs from './components/blocs/ToolBar';
import Album from './views/Album';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
          
        <Stack.Screen 
          name="Login" 
          component={Login} 
        />
        <Stack.Screen 
          name="Albums" 
          component={Albums}
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
        />
        <Stack.Screen 
          name="AppareilPhoto" 
          component={AppareilPhoto} 
        />
        
        <Stack.Screen 
          name="Photo_Selected_Perso" 
          component={Photo_Selected_Perso} 
        />
        <Stack.Screen 
          name="Photos_Shared" 
          component={Photos_Shared} 
        />
        <Stack.Screen 
          name="Photo_Selected_Shared" 
          component={Photo_Selected_Shared} 
        />
        <Stack.Screen 
          name="My_Photos" 
          component={My_Photos} 
        />
          <Stack.Screen 
          name="Photos" 
          component={Photos} 
        />
        <Stack.Screen 
          name="Test" 
          component={Test} 
        />
        <Stack.Screen 
          name="Album" 
          component={Album} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
