import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  text: {
    marginHorizontal: 10,
    alignItems: "flex-start",
    fontFamily: "LobsterTwo_400Regular_Italic",
    fontSize: 16,
    color: "black",
  },
  button: {
    padding: 15,
  },
  picker: {
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 25,
    width: Platform.OS === "android" ? "100%" : null,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-end",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
  },
  quotationMark: {
    fontSize: 25,
    fontWeight: "bold",
  },
  quoteBox: {
    borderColor: "grey",
    borderWidth: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  generalText: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 20,
    color: "white",
    alignSelf: "center",
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Orbitron_400Regular",
    color: "white",
  },
  logo: {
    width: 300,
  },
});

export default styles;
