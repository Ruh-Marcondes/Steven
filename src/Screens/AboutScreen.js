import React, { useState } from "react";
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
import { Feather, Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Alert.alert("Sorry", "N terminado")}>
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
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
