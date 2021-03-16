import { StyleSheet, Platform } from "react-native";
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

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
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontStyle: "italic",
    fontSize: responsiveFontSize(2.5),
    color: "black",
  },
  header: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
    alignSelf: "flex-end",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "black",
  },
  quotationMark: {
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
  },
  quoteBoxWrapper: {
    maxHeight: responsiveHeight(40),
  },
  quoteBox: {
    maxHeight: responsiveHeight(45),
    borderColor: "grey",
    borderWidth: 5,
    padding: 10,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  generalText: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: responsiveFontSize(2.5),
    color: "white",
    alignSelf: "center",
    paddingVertical: 5,
  },
  logo: {
    width: responsiveWidth(70),
  },
  spinner: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  shareButton: {
    marginBottom: 40,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: responsiveFontSize(2),
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: "orange",
    borderRadius: 25,
    color: "orange",
    paddingRight: 30, // to ensure the text is never behind the icon
    paddingLeft: 30,
    marginBottom: 30,
  },
  inputAndroid: {
    fontSize: responsiveFontSize(2),
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 3,
    borderColor: "orange",
    borderRadius: 25,
    color: "orange",
    paddingRight: 30, // to ensure the text is never behind the icon
    paddingLeft: 30,
    marginBottom: 30,
  },
});

export { styles, pickerSelectStyles };
