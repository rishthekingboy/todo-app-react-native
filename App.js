import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TodoContext } from "./src/context";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator ";

export default function App() {
  const [todos, setTodos] = useState([]);
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
