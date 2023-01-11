import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ onPress, title, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.btn}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <Text style={styles.btnText}>{title || "Button"}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#01497c",
    borderRadius: 10,
    marginTop: 20,
    paddingVertical: 10,
    display: "flex",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
});
