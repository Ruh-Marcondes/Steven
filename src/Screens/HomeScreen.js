import React, {useState}from 'react'
import {View,Text, StyleSheet} from 'react-native'

export default function HomeScreen(){
    return(
        <View style={styles.container}>
        <Text style={styles.txt}>Screen Home</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#504',
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
    },
  });
  