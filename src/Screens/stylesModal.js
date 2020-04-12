import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  //configuração Global
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
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
    marginRight: 30,
  },
  containerModal: {
    flexDirection: "column",
    width: "83%",
    height: "100%",
    justifyContent: "space-between",
  },
  linhas: {
    borderBottomColor: "#797977",
    borderBottomWidth: 1,
    marginLeft: 2,
    marginRight: 3,
    paddingTop: 5,
    marginBottom: 10,
  },
  text: {
    marginRight: 100,
    fontSize: 20,
    fontWeight: "bold",
  },
  linear:{
    position: "absolute",
    flex: 1,
    height: "100%",
    width: "100%",
  },
  iconMargin:{
    marginLeft:30,
  },
  //termina as configurações do Modal
});

//cores
export const colorLiner = ["#fefefe", "#e66da3"],
  colorsModal = ["#000245", "#fcff29", "#797977"],
  diamantes = ["#fefefe","#dfe221","#1ebaea","#c23d76"];
