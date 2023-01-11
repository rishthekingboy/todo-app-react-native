import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { TodoContext } from "../context";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { SCREEN_NAME } from "../utils/helper";

const FinishedItems = ({navigation}) => {
  const { todos, setTodos } = useContext(TodoContext);

  const handleChangeStatus = (id) => {
    let updatedTodos = todos.map((todo, i) => {
      if (todo.id === id) {
        return {
          ...todo,
          isPending: !todo.isPending,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const Items = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            onPress={() => {
              handleChangeStatus(item.id);
            }}
          >
            {item.isPending ? (
              <MaterialIcons
                name="pending-actions"
                size={30}
                color={"#c1121f"}
              />
            ) : (
              <AntDesign name="checkcircleo" size={30} color={"green"} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => {
              handleDelete(item.id);
            }}
          >
            <Ionicons name="trash" color={"red"} size={30} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const EmptyElement = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.noElemTxt}>Wooo, no todo found !!</Text>
        <Button
          onPress={() => {
            navigation.navigate(SCREEN_NAME.ADD_TODO);
          }}
          title="Add Todo"
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={Items}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={EmptyElement}
      />
    </View>
  );
};

export default FinishedItems;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 20,
  },
  btnGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteBtn: {
    marginLeft: 15,
  },
  emptyContainer: {
    padding: 20,
  },
  noElemTxt: {
    marginTop: "75%",
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
    textAlign: "center",
  },
});
