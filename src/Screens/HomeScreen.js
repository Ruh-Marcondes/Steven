import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

//Tela Play
export default function HomeScreen({ navigation }) {
  //animacão
  const AnimatableBtn = Animatable.createAnimatableComponent(Image);
  const AnimatableIcons = Animatable.createAnimatableComponent(Feather);
  const [open, setOpen] = useState(false);
  //função
  function goToPerguntas() {
    alert("Ainda ñ Liberado");
    //return navigation.navigate("Perguntas")
  }
  function closeModal() {
    setOpen(false);
  }
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.containerModal}>
          <LinearGradient
            colors={["#fefefe", "#ca3877"]}
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
                    color="#1ebaea"
                    animation="bounceInRight"
                    duration={700}
                    style={{ marginLeft: 10, paddingTop: 5 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: "#fff",
                  borderBottomWidth: 1,
                  marginLeft: 2,
                  marginRight: 3,
                  paddingTop: 5,
                  marginBottom: 10,
                }}
              />
              {/*Confucuração*/}
              <TouchableOpacity onPress={() => alert("Em andamento")}>
                <View style={styles.Elementos}>
                  <Feather name="settings" size={30} color="#fdffb6" />
                  <Text
                    style={{
                      marginRight: 50,
                      fontSize: 20,
                      fontWeight: "bold",
                      fontFamily: "",
                    }}
                  >
                    Configurações
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  borderBottomColor: "#fff",
                  borderBottomWidth: 1,
                  marginLeft: 2,
                  marginRight: 3,
                  paddingTop: 5,
                  marginBottom: 10,
                }}
              />
              {/*Sobre*/}
              <TouchableOpacity onPress={() => alert("Em andamento")}>
                <View style={styles.Elementos}>
                  <Feather name="info" size={30} color="#fdffb6" />
                  <Text
                    style={{
                      marginRight: 100,
                      fontSize: 20,
                      fontWeight: "bold",
                      fontFamily: "",
                    }}
                  >
                    Sobre
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  borderBottomColor: "#fff",
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
              duration={2500}
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
              duration={2000}
              direction="alternate"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
var styles = StyleSheet.create({
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
