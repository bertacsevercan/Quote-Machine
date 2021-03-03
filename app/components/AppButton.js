import React from "react";
import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

function AppButton({ onPress, title, color = "white", border }) {
  return (
    <TouchableOpacity
      style={border ? [styles.button, { borderColor: color }] : null}
      onPress={onPress}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    padding: 20,
  },
  button: {
    borderWidth: 2,
    borderRadius: 35,
  },
});

export default AppButton;
