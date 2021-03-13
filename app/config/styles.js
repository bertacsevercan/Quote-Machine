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
    paddingVertical: 10,
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
  spinner: {
    paddingLeft: 10,
    paddingTop: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: "orange",
    borderRadius: 25,
    color: "orange",
    paddingRight: 30, // to ensure the text is never behind the icon
    paddingLeft: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: "orange",
    borderRadius: 25,
    color: "orange",
    paddingRight: 30, // to ensure the text is never behind the icon
    paddingLeft: 30,
  },
});

export { styles, pickerSelectStyles };
