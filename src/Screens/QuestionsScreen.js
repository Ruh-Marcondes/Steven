import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";
import RadioForm from "react-native-simple-radio-button";
import {per,alternativa1,alternativa2,alternativa3,alternativa4} from '../Armazenamento/armazen'
import { set } from "react-native-reanimated";
export default function QuestionsScreen({ navigation }) {
  //variaveis
  const [pergunta, setPergunta] = useState(per[0]);
  const [alt1, setAlt1] = useState(alternativa1[0]);
  const [alt2, setAlt2] = useState(alternativa2[0]);
  const [alt3, setAlt3] = useState(alternativa3[0]);
  const [alt4, setAlt4] = useState(alternativa4[0]);
  const [vez, setVez] = useState(0);
  var radio_props = [
    { label: alt1, value: 0 },
    { label: alt2, value: 1 },
    { label: alt3, value: 2 },
    { label: alt4, value: 3 },
  ];
  //funcoes
  function goToNext(){
    if(vez < 9){
      setVez(vez+1) 
    }else{
      setVez(0)
    }
  }
  return (
    <View style={styles.container} onRequestClose={() => alert("teste")}>
      <ImageBackground
        source={require("../assets/Fundo_perguntas.png")}
        style={styles.image}
      >
        {/*conteudo da pag */}
        <Modal
          visible={true}
          transparent={true}
          style={{ flex: 1 }}
          animated={"fade"}
          onRequestClose={() => alert("todo seu prograsso será perdido")}
        >
          <View style={styles.contmodal}>
            <View style={styles.hader} />
            <View>
              <View style={styles.contPergunta}>
                <Text style={styles.TXTperguntas}>{vez + 1}.</Text>
                <Text
                  style={[
                    styles.TXTperguntas,
                    { marginLeft: 10, marginRight: 10 },
                  ]}
                >
                  {pergunta}
                </Text>
              </View>
              <View style={styles.contBtns}>
                <RadioForm
                  radio_props={radio_props}
                  initial={null}
                  onPress={(value,label) => {
                    alert("is this value: " + label);
                  }}
                  borderWidth={5}
                  buttonSize={20}
                  buttonOuterSize={40}
                  animation={true}
                  buttonColor={"#e74"}
                  labelStyle={{
                    fontSize: 20,
                    fontWeight: "200",
                    color: "#0d0d0d",
                  }}
                />
              </View>
              <View style={styles.icon}>
                <TouchableOpacity onPress={goToNext}>
                  <FontAwesome5
                    name={"angle-double-right"}
                    size={35}
                    color={"#0d0d0d"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contmodal: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  hader: {
    marginTop: Constants.statusBarHeight + 30,
  },
  contPergunta: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
    justifyContent: "space-between",
  },
  TXTperguntas: {
    color: "#080808",
    fontWeight: "600",
    fontSize: 30,
    justifyContent: "center",
  },
  contBtns: {
    marginTop: 40,
    marginRight: 10,
    padding: 20,
    marginLeft: 45,
  },
  icon: {
    alignItems: "center",
    flex: 1,
    marginLeft: 190,
  },
});
