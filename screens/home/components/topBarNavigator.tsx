import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="About"
        component={() => {
          <View>
            <Text>About</Text>
          </View>;
        }}
      />
      <Tab.Screen
        name="Stats"
        component={() => {
          <View>
            <Text>Stats</Text>
          </View>;
        }}
      />
      <Tab.Screen
        name="Moves"
        component={() => {
          <View>
            <Text>Moves</Text>
          </View>;
        }}
      />
      <Tab.Screen
        name="Evolution"
        component={() => {
          <View>
            <Text>Evolution</Text>
          </View>;
        }}
      />
    </Tab.Navigator>
  );
};
