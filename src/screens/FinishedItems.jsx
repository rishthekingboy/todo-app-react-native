import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Items from "../components/Items";
import { TodoContext } from "../context";

const FinishedItems = () => {
  const { todos } = useContext(TodoContext);
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={Items}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FinishedItems;

const styles = StyleSheet.create({});
