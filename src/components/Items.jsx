import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TodoContext } from "../context";

const TodoItem = ({ item }) => {
  const { todos } = useContext(TodoContext);
  const handleChangeStatus = (id) => {
    // console.log(id);
    // let updatedTodos = todos.map((todo, i) => {
    //   if (todo.id === id) {
    //     return {
    //       ...todo,
    //       isPending: !todo.isPending,
    //     };
    //   } else {
    //     return todo;
    //   }
    // });
    // setTodos(updatedTodos);
  };
  return (
    <TouchableOpacity
      onPress={() => {
        handleChangeStatus(item.id);
      }}
      style={styles.container}
    >
      <Text style={styles.itemName}>{item.name}</Text>
      <TouchableOpacity>
        {item.isPending ? (
          <MaterialIcons name="pending-actions" size={30} color={"#c1121f"} />
        ) : (
          <AntDesign name="checkcircleo" size={30} color={"green"} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 20,
  },
});
