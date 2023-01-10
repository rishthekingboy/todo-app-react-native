import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const PendigItems = () => {
  const [input, setInput] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Workout..."}
          maxLength={25}
        />
        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.btnText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PendigItems;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 10,
    width: "80%",
  },
  input: {
    color: "#0b090a",
    fontSize: 18,
    paddingHorizontal: 10,
    backgroundColor: "lightgray",
    height: 50,
    borderRadius: 10,
  },
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
