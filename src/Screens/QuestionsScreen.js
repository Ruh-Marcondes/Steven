import React, { useState } from "react";
import { ImageBackground, View, Image, StyleSheet,TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants'

export default function QuestionsScreen({ navigation }) {
 
  //função
  function goToPerguntas() {
    alert("Carregando pergunta 3..2..1..")
    
  }
  return (

    <View style={styles.container}>
      <ImageBackground source={require('../assets/Fundo_perguntas.png')} style={styles.image}>
        {/*conteudo da pag */}
        <View style={styles.contButton}>
          
        </View>
      </ImageBackground>
    </View>
  );
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  
});
