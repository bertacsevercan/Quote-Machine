import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function AppButton({ onPress, title, color = "white", border, disabled }) {
  return (
    <TouchableOpacity
      style={
        border
          ? [
              styles.button,
              { borderColor: color },
              disabled ? styles.disabled : null,
            ]
          : null
      }
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color }, disabled ? styles.disabled : null]}>
        {title}
      </Text>
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
  disabled: {
    borderColor: "gray",
    color: "gray",
  },
});

export default AppButton;
