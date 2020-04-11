import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function SettingsScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  //funções
  function closeModal() {
    setOpen(false);
    return navigation.navigate("Home");
  }
  function gotohome() {}

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
                onPress={() => {
                  setOpen(false);
                }}
              >
                <View style={styles.Elementos}>
                  <Feather name="settings" size={30} color="#dfe221" />
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
              <TouchableOpacity onPress={() => alert("Em andamento")}>
                <View style={styles.Elementos}>
                  <Feather name="info" size={30} color="#dfe221" />
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
        source={require("../assets/Fundo_init.png")}
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.containerPage}>
            <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
            <Text>AAAAAAAAAAAAAAAAAA</Text>
          </View>
          <View style={styles.containerPage}>
            <Text>OLAÀAAAAAAAAA````AÀA`</Text>
          </View>
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
  header: {
    paddingTop: Constants.statusBarHeight + 3,
    flexDirection: "row",
    backgroundColor: "#FFBBC8",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  containerPage: {
    flex: 1,
    flexDirection: "column",
  },
});
