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
import { Feather, Ionicons, FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutScreen({navigation}) {
    //variaveis
    const [open,setOpen] = useState(false)
  //funcoes
  function goToHome(){
      setOpen(false)
      return navigation.navigate("Home")
  }
  function goToConfig(){
      Alert.alert("Desculpa","Ñ Terminado")
    //   setOpen(false)
    //   return navigation.navigate("Configurações")
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
                <TouchableOpacity onPress={goToHome}>
                  <Ionicons
                    name="ios-arrow-back"
                    size={37}
                    color="#000245"
                    style={{ marginLeft: 20, paddingTop: 5 }}
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
              <TouchableOpacity
                onPress={goToConfig}
              >
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
              <TouchableOpacity onPress={() => setOpen(false)}>
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
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Ionicons
            name="ios-arrow-back"
            size={37}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        style={styles.image}
        source={require("../assets/tela_About.png")}
      >
        <View
          style={[
            styles.container,
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
            }}
          >
            Sobre
          </Text>
          <View style={styles.conticon}>
            <FontAwesome name="diamond" size={30} color="#fefefe" />
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text style={styles.texticon}>Quiz sobre a serie</Text>
              <Text style={styles.texticon}>Steven Universo criado</Text>
              <Text style={styles.texticon}> por Rebecca Sugar</Text>
            </View>
          </View>
          <View style={styles.conticon}>
            <FontAwesome name="diamond" size={30} color="#dfe221" />
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text style={styles.texticon}>Direitos Autorais:</Text>
              <Text style={styles.texticon}>@ainda ñ reservados</Text>
            </View>
          </View>
          <View style={styles.conticon}>
            <FontAwesome name="diamond" size={30} color="#1ebaea" />
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text style={styles.texticon}>Desenvolvedora:</Text>
              <Text style={styles.texticon}> Ruahma Marcondes</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show("Cornos deviam ser mortos", ToastAndroid.SHORT);
            }}>
            <View style={styles.conticon}>
              <FontAwesome name="diamond" size={30} color="#c23d76" />
              <Text style={styles.texticon}>Version: 1.0.5</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
  header: {
    paddingTop: Constants.statusBarHeight + 3,
    flexDirection: "row",
    backgroundColor: "#474444",
  },
  txt: {},
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
