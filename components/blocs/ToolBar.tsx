// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Photos from '../../views/Photos';
// import Albums from '../../views/Albums';
// import AppareilPhoto from '../../views/AppareilPhoto';
// import React from 'react';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


// const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({ children, onPress }) => (
//     <TouchableOpacity
//         style={{
//             justifyContent: 'center',
//             alignItems: 'center',
//             ...styles.shadow
//         }}
//         onPress={onPress}
//     >
//         <View style={{
//             width: 70,
//             height: 70,
//             borderRadius: 35,
//             backgroundColor: '#e32f45',
//         }}>
//             {children}
//         </View>
//     </TouchableOpacity>
// );

// const Tabs = () => {
//     return (
//         <Tab.Navigator
//             tabBarOptions={{
//                 showLabel: false,
//                 style: {
//                     position: 'absolute',
//                     elevation: 0,
//                     backgroundColor: '#ffffff',
//                     height: 80,
//                     ...styles.shadow
//                 }
//             }}
//         >
//             <Tab.Screen name="Photos" component={Photos}
//                 options={{
//                     tabBarIcon: ({ focused }) => (
//                         <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                             <Image source={require('../../assets/icons/photo_icon.png')}
//                                 resizeMode='contain'
//                                 style={{
//                                     width: 30,
//                                     height: 30,
//                                     tintColor: focused ? '#e32f45' : '#748c94'
//                                 }}
//                             />
//                             <Text
//                                 style={{
//                                     color: focused ? '#e32f45' : '#748c94',
//                                     fontSize: 10
//                                 }}>
//                                 PHOTOS
//                        </Text>
//                         </View>
//                     ),
//                 }} />
//             <Tab.Screen name="AppareilPhoto" component={AppareilPhoto}
//                 options={{
//                     tabBarIcon: ({ focused }) => (
//                         <Image
//                             source={require('../../assets/icons/appareilphoto_icon.png')}
//                             resizeMode='contain'
//                             style={{
//                                 width: 30,
//                                 height: 30,
//                                 tintColor: '#fff'

//                             }}
//                         />
//                     ),

//                     tabBarButton: (props) => (
//                         <CustomTabBarButton {...props} />
//                     )
//                 }} />
//             <Tab.Screen name="Albums" component={Albums}
//                 options={{
//                     tabBarIcon: ({ focused }) => (
//                         <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                             <Image source={require('../../assets/icons/album_icon.png')}
//                                 resizeMode='contain'
//                                 style={{
//                                     width: 30,
//                                     height: 30,
//                                     tintColor: focused ? '#e32f45' : '#748c94'

//                                 }}
//                             />
//                             <Text
//                                 style={{
//                                     color: focused ? '#e32f45' : '#748c94',
//                                     fontSize: 10
//                                 }}>
//                                 ALBUMS
//                        </Text>
//                         </View>
//                     ),
//                 }} />

//         </Tab.Navigator>
//     );
// }

// const styles = StyleSheet.create({
//     shadow: {
//         shadowColor: '#8fcbbc',
//         shadowOffset: {
//             width: 0,
//             height: 10
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.5,
//         elevation: 5
//     }
// })
// export default Tabs;