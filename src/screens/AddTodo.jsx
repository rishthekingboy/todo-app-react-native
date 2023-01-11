import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { TodoContext } from "../context";
import { generateUUID, SCREEN_NAME } from "../utils/helper";
import Button from "../components/Button";

const PendigItems = ({ navigation }) => {
  const [name, setName] = useState("");
  const { setTodos } = useContext(TodoContext);

  const handleAddTodo = () => {
    setTodos((prev) => [
      { name, id: generateUUID(5), isPending: true },
      ...prev,
    ]);

    setName("");
    navigation.navigate(SCREEN_NAME.TODOS);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Workout..."}
          maxLength={25}
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <Button
          disabled={name === ""}
          title={"Add Todo"}
          onPress={() => {
            handleAddTodo();
          }}
        />
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
});
