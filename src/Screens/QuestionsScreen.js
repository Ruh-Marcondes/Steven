import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Text,
  Alert,
} from "react-native";
import { style, diamantes } from "./stylesModal";
import { FontAwesome5, SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import Constants from "expo-constants";
import RadioForm from "react-native-simple-radio-button";
import {
  per,
  alternativa1,
  alternativa2,
  alternativa3,
  alternativa4,
  resposta,
  dificuldade,
  newvalues,
  entrei,
} from "../Armazenamento/armazen";
import { LinearGradient } from "expo-linear-gradient";
export default function QuestionsScreen({ navigation }) {
  //variaveis
  const [open, setOpen] = useState(true);
  const [pergunta, setPergunta] = useState(per[0]);
  const [alt1, setAlt1] = useState(alternativa1[0]);
  const [alt2, setAlt2] = useState(alternativa2[0]);
  const [alt3, setAlt3] = useState(alternativa3[0]);
  const [alt4, setAlt4] = useState(alternativa4[0]);
  const [selecionado, setselecionado] = useState();
  const [vez, setVez] = useState(0);
  const [modalFinal, setModalFinal] = useState(false);
  //variaveis para resposta do user
  const [pontos, setPontos] = useState(0);
  var radio_props = [
    { label: alt1, value: 0 },
    { label: alt2, value: 1 },
    { label: alt3, value: 2 },
    { label: alt4, value: 3 },
  ];
  function fecharPerguntas() {
    Alert.alert(
      "Tem Certeza?",
      "Todo seu progresso será perdido ",
      [
        { text: "Ok", onPress: () => fechar() },
        { text: "cancelar", onPress: () => setOpen(true) },
      ],
      { canceled: false }
    );
  }
  function fechar() {
    setOpen(false);
    setModalFinal(false);
    return navigation.navigate("Home");
  }
  //funcoes
  function goToNext() {
    if (vez < 9) {
      setVez(vez + 1);
      setPergunta(per[vez + 1]);
      setAlt1(alternativa1[vez + 1]);
      setAlt2(alternativa2[vez + 1]);
      setAlt3(alternativa3[vez + 1]);
      setAlt4(alternativa4[vez + 1]);
      addResposta();
    } else {
      setOpen(false);
      setModalFinal(true);
      //console.log("Pontos: " + pontos);
    }
  }
  function addResposta() {
    if (resposta[vez] == radio_props[selecionado].label) {
      if (dificuldade[vez] === "F") {
        setPontos(pontos + 10);
      } else {
        if (dificuldade[vez] === "M") {
          setPontos(pontos + 20);
        } else {
          setPontos(pontos + 30);
        }
      }
    }
  }
  function agaiin() {
    newvalues();
    do {
      if (entrei == 1) {
        setModalFinal(false);
        setVez(0);
        setPergunta(per[0]);
        setAlt1(alternativa1[0]);
        setAlt2(alternativa2[0]);
        setAlt3(alternativa3[0]);
        setAlt4(alternativa4[0]);
        setPontos(0);
        setOpen(true);
        
      }
    } while (entrei !== 1);
  }
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("../assets/Fundo_perguntas.png")}
        style={style.image}
      >
        {/*Modal final*/}
        <Modal
          visible={modalFinal}
          transparent={false}
          onRequestClose={fechar}
          animated="fade"
        >
          <View style={style.container}>
            <LinearGradient
              colors={[diamantes[2], diamantes[1]]}
              style={style.linear}
            >
              <View style={style.container}>
                <View
                  style={[
                    styles.hader,
                    { flexDirection: "row", marginLeft: 40 },
                  ]}
                >
                  <View style={style.iconMargin}>
                    <SimpleLineIcons
                      name="diamond"
                      color={diamantes[0]}
                      size={40}
                    />
                  </View>
                  <View style={style.iconMargin}>
                    <SimpleLineIcons
                      name="diamond"
                      color={diamantes[3]}
                      size={40}
                    />
                  </View>
                  <View style={style.iconMargin}>
                    <SimpleLineIcons
                      name="diamond"
                      color={diamantes[0]}
                      size={40}
                    />
                  </View>
                  <View style={style.iconMargin}>
                    <SimpleLineIcons
                      name="diamond"
                      color={diamantes[3]}
                      size={40}
                    />
                  </View>
                </View>
                {/*Header - da tela*/}
                <View style={style.container}>
                  <View
                    style={{
                      marginTop: "25%",
                      marginLeft: "5%",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.txtFinal}>Parabéns</Text>
                    <Text style={[styles.txtFinal, { alignSelf: "center" }]}>
                      você Fez: {pontos} pontos
                    </Text>
                  </View>
                  <View style={style.container}>
                    <TouchableOpacity onPress={fechar}>
                      <AntDesign
                        name="home"
                        color={"#797977"}
                        size={50}
                        style={{
                          alignSelf: "center",
                          marginTop: 50,
                          marginBottom: 75,
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={agaiin}>
                      <SimpleLineIcons
                        name="reload"
                        size={100}
                        style={{ alignSelf: "center", marginTop: 10 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </Modal>
        {/*conteudo da pag */}
        <Modal
          visible={open}
          transparent={true}
          style={{ flex: 1 }}
          animated="fade"
          onRequestClose={fecharPerguntas}
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
                  <View>
                  <RadioForm
                    radio_props={radio_props}
                    initial={null}
                    onPress={(value) => {
                      setselecionado(value);
                    }}
                    borderWidth={5}
                    buttonSize={15}
                    buttonOuterSize={30}
                    animation={true}
                    buttonColor={"#e74"}
                    labelStyle={{
                      fontSize: 19,
                      fontWeight: "200",
                      marginRight: 30,
                    }}
                    />
                    </View>
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
  contmodal: {
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  hader: {
    marginTop: Constants.statusBarHeight + 30,
  },
  contPergunta: {
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    justifyContent: "space-between",
  },
  TXTperguntas: {
    color: "#080808",
    fontWeight: "600",
    fontSize: 20,
    justifyContent: "center",
  },
  contBtns: {
    marginTop: 20,
    marginRight: 10,
    padding: 10,
    marginLeft: 20,
  },
  icon: {
    alignItems: "center",
    flex: 1,
    marginLeft: 190,
  },
  txtFinal: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000245",
  },
});
