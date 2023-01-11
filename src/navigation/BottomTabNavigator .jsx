import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome } from "react-native-vector-icons";
import Todos from "../screens/Todos";
import AddTodo from "../screens/AddTodo";
import { SCREEN_NAME } from "../utils/helper";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={SCREEN_NAME.TODOS}
        component={Todos}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="list-alt"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.ADD_TODO}
        component={AddTodo}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="playlist-edit"
              size={35}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
