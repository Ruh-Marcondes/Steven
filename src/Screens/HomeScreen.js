import React, { useState, version } from "react";
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
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { newvalues, entrei } from "../Armazenamento/armazen";
//Tela Play
export default function HomeScreen({ navigation }) {
  //animacão
  const AnimatableBtn = Animatable.createAnimatableComponent(Image);
  const AnimatableIcons = Animatable.createAnimatableComponent(Feather);
  const [open, setOpen] = useState(false);
  //função
  async function goToPerguntas() {
    newvalues();
    do {
      if (entrei == 1) {
        return navigation.navigate("Perguntas");
      }
    } while (entrei !== 1);
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
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.containerModal}>
          <LinearGradient
            colors={["#fefefe", "#e66da3"]}
            style={{
              position: "absolute",
              flex: 1,
              height: "100%",
              width: "100%",
            }}
          >
            <View style={styles.MargimModal}>
              <View style={styles.Elementos}>
                <TouchableOpacity onPress={closeModal}>
                  <AnimatableIcons
                    name="arrow-left"
                    size={37}
                    color="#000245"
                    animation="bounceInRight"
                    duration={700}
                    style={{ marginLeft: 10, paddingTop: 5 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: "#797977",
                  borderBottomWidth: 1,
                  marginLeft: 2,
                  marginRight: 3,
                  paddingTop: 5,
                  marginBottom: 10,
                }}
              />
              {/*Confucuração*/}
              <TouchableOpacity onPress={gotoSttings}>
                <View style={styles.Elementos}>
                  <Feather name="settings" size={30} color="#fcff29" />
                  <Text
                    style={{
                      marginRight: 50,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Configurações
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  borderBottomColor: "#797977",
                  borderBottomWidth: 1,
                  marginLeft: 2,
                  marginRight: 3,
                  paddingTop: 5,
                  marginBottom: 10,
                }}
              />
              {/*Sobre*/}
              <TouchableOpacity onPress={goToAbout}>
                <View style={styles.Elementos}>
                  <Feather name="info" size={30} color="#fcff29" />
                  <Text
                    style={{
                      marginRight: 100,
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    Sobre
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  borderBottomColor: "#797977",
                  borderBottomWidth: 1,
                  marginLeft: 2,
                  marginRight: 3,
                  paddingTop: 5,
                  marginBottom: 10,
                }}
              />
            </View>
          </LinearGradient>
        </View>
      </Modal>
      {/*Termina o modal e começa o principal*/}
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <AnimatableIcons
              name="align-justify"
              size={37}
              color="#8D20D0"
              animation="bounceInRight"
              duration={1000}
              style={{ marginLeft: 15 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require("../assets/Fundo_init.png")}
        style={styles.image}
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
  // Configurações Modal
  Elementos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  MargimModal: {
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  containerModal: {
    flexDirection: "column",
    width: "70%",
    height: "100%",
    justifyContent: "space-between",
  },
  //termina as configurações do Modal
  //Configurações do resto da pagina
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

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