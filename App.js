import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TodoContext } from "./src/context";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator ";
const items = [
  { name: "task 1", id: 1, isPending: false },
  { name: "task 1", id: 2, isPending: false },
  { name: "task 1", id: 3, isPending: false },
  { name: "task 1", id: 4, isPending: true },
  { name: "task 1", id: 5, isPending: false },
  { name: "task 1", id: 6, isPending: false },
];
export default function App() {
  const [todos, setTodos] = useState([...items]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <View style={styles.container}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </TodoContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
