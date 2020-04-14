import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Alert,
  ToastAndroid,
} from "react-native";
import { style, colorLiner, colorsModal, diamantes } from "./stylesModal";
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutScreen({ navigation }) {
  //variaveis
  const [open, setOpen] = useState(false);
  //funcoes
  function goToHome() {
    setOpen(false);
    return navigation.navigate("Home");
  }
  function goToConfig() {
    Alert.alert("Desculpa", "Ñ Terminado");
    //   setOpen(false)
    //   return navigation.navigate("Configurações")
  }
  return (
    <View style={style.container}>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={style.containerModal}>
          <LinearGradient
            colors={[colorLiner[0], colorLiner[1]]}
            style={style.linear}
          >
            <View style={style.MargimModal}>
              <View style={style.Elementos}>
                <TouchableOpacity onPress={goToHome}>
                  <Ionicons
                    name="ios-home"
                    size={37}
                    color={colorsModal[0]}
                    style={{ marginLeft: 20, paddingTop: 5 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={style.linhas} />
              {/*Confucuração*/}
              <TouchableOpacity onPress={goToConfig}>
                <View style={style.Elementos}>
                  <View style={style.iconMargin}>
                  <Feather name="settings" size={30} color={colorsModal[1]} />
                  </View>
                  <Text style={[style.text, { marginRight: 50 }]}>
                    Configurações
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={style.linhas} />
              {/*Sobre*/}
              <TouchableOpacity onPress={() => setOpen(false)}>
                <View style={style.Elementos}>
                  <View style = {style.iconMargin}>
                  <Feather name="info" size={30} color={colorsModal[1]} />
                  </View>
                  <Text style={style.text}>Sobre</Text>
                </View>
              </TouchableOpacity>
              <View style={style.linhas} />
            </View>
          </LinearGradient>
        </View>
      </Modal>

      {/*Termina o modal e começa o principal*/}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Ionicons
            name="ios-arrow-back"
            size={37}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        style={style.image}
        source={require("../assets/tela_About.png")}
      >
        <View
          style={[
            style.container,
            { flexDirection: "column", alignItems: "center" },
          ]}
        >
          <Text
            style={{
              fontSize: 45,
              alignSelf: "center",
              marginTop: 15,
              fontWeight: "900",
              textDecorationLine: "underline",
              color: "#baefe9",
              marginBottom: 35,
            }}
          >
            Sobre
          </Text>
          <View style={styles.conticon}>
            <FontAwesome name="diamond" size={30} color={diamantes[0]} />
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text style={styles.texticon}>Quiz sobre a serie</Text>
              <Text style={styles.texticon}>Steven Universo criado</Text>
              <Text style={styles.texticon}> por Rebecca Sugar</Text>
            </View>
          </View>
          <View style={styles.conticon}>
            <FontAwesome name="diamond" size={30} color={diamantes[1]} />
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text style={styles.texticon}>Direitos Autorais:</Text>
              <Text style={styles.texticon}>@ainda ñ reservados</Text>
            </View>
          </View>
          <View style={styles.conticon}>
            <FontAwesome name="diamond" size={30} color={diamantes[2]} />
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text style={styles.texticon}>Desenvolvedora:</Text>
              <Text style={styles.texticon}> Ruahma Marcondes</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show("Cornos deviam ser mortos", ToastAndroid.SHORT);
            }}
          >
            <View style={styles.conticon}>
              <FontAwesome name="diamond" size={30} color={diamantes[3]} />
          <Text style={styles.texticon}>Version:1.1.1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight + 3,
    flexDirection: "row",
    backgroundColor: "#474444",
  },
  conticon: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingTop: 10,
  },
  texticon: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "700",
  },
});
