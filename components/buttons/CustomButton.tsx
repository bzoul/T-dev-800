import React from 'react'

import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function CustomButton( props ) {
  const {
    view, title, backgroundColor, height, width
  } = props;
  
  return(
      <TouchableOpacity 
      onPress={() =>
          props.navigation.navigate(`${view}`)
        }
      style={[
          height,
          width,
          styles.appButtonContainer,
          backgroundColor && { backgroundColor }
        ]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
  
}


  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginTop: 20,
      marginBottom: 20,
      
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });
