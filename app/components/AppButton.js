import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  useResponsiveHeight,
  useResponsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

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
    fontSize: responsiveFontSize(2.5),
    padding: 20,
  },
  button: {
    borderWidth: 2,
    borderRadius: 35,
    marginVertical: 10,
  },
  disabled: {
    borderColor: "gray",
    color: "gray",
  },
});

export default AppButton;
