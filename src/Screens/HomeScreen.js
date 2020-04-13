import React, { useState,} from "react";
import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Alert,
} from "react-native";
import {style,colorLiner,colorsModal} from './stylesModal'
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { newvalues, entrei } from "../Armazenamento/armazen";
//Tela Play
export default function HomeScreen({ navigation }) {
  //animacão
  const AnimatableBtn = Animatable.createAnimatableComponent(Image);
  const [open, setOpen] = useState(false);
  //função
  async function goToPerguntas() {
    newvalues();
    do {
      if (entrei == 1) {
        return navigation.navigate("Perguntas");
      }
    } while (entrei !== 1);
    entrei = 0
  }
  function closeModal() {
    setOpen(false);
  }
  function gotoSttings() {
    Alert.alert("Desculpa", "Ainda ñ está pronto");
  }
  function goToAbout() {
    setOpen(false);
    return navigation.navigate("Sobre");
  }
  return (
    <View style={style.container}>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={style.containerModal}>
          <LinearGradient
            colors={[colorLiner[0],colorLiner[1]]}
            style={style.linear}>
            <View style={style.MargimModal}>
              <View style={style.Elementos}>
                <TouchableOpacity onPress={closeModal}>
                  <Feather
                    name="arrow-left"
                    size={37}
                    color={colorsModal[0]}
                    style={{ marginLeft: 10, paddingTop: 5 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={style.linhas}
              />
              {/*Conficuração*/}
              <TouchableOpacity onPress={gotoSttings}>
                <View style={style.Elementos}>
                  <View style = {style.iconMargin}>
                  <Feather name="settings" size={30} color={colorsModal[1]} />
                  </View>
                  <Text
                    style={[style.text,{marginRight:50}]}
                  > Configurações</Text>
                </View>
              </TouchableOpacity>
              <View
                style= { style.linhas}
              />
              {/*Sobre*/}
              <TouchableOpacity onPress={goToAbout}>
                <View style={style.Elementos}>
                  <View style = {style.iconMargin}>
                  <Feather name="info" size={30} color={colorsModal[1]} />
                  </View>
                  <Text
                    style={style.text}> Sobre</Text>
                </View>
              </TouchableOpacity>
              <View
                style={style.linhas}
              />
            </View>
          </LinearGradient>
        </View>
      </Modal>
      {/*Termina o modal e começa o principal*/}
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Feather
              name="align-justify"
              size={37}
              color="#8D20D0"
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require("../assets/Fundo_init.png")}
        style={style.image}
      >
        {/*conteudo da pag */}
        <View style={styles.contButton}>
          <TouchableOpacity onPress={goToPerguntas}>
            <AnimatableBtn
              style={styles.button}
              source={require("../assets/Button_play.png")}
              useNativeDriver
              animation="bounceInDown"
              duration={1500}
              direction="alternate"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
var styles = StyleSheet.create({
  contButton: {
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    alignSelf: "center",
    width: "70%",
    resizeMode: "contain",
    height: 220,
  },
  header: {
    paddingTop: Constants.statusBarHeight + 3,
    flexDirection: "row",
    backgroundColor: "#FFBBC8",
  },
});