import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { height, scaleFont, width } from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
import { StyleSheet } from "react-native";
import PokemonTabAboutComponent from "./pokemonTabAboutComponent";
import PokemonTabStatsComponent from "./pokemonTabStatsComponent";

const Tab = createMaterialTopTabNavigator();

const TAB_BAR_WIDTH = width / 4;
const TAB_BAR_INDICATOR_WIDTH = width * 0.04;

export const PokemonDetailScreenTab = () => {
  return (
    <Tab.Navigator
      initialLayout={{
        width: width,
        height: height / 2,
      }}
      screenOptions={{
        tabBarActiveTintColor: COLORS.primaryBlue,
        tabBarInactiveTintColor: COLORS.grey300,
        tabBarBounces: false,
        tabBarAndroidRipple: styles.tabBarAndroidRipple,
        tabBarStyle: styles.tabBarStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}
    >
      <Tab.Screen name="About" component={PokemonTabAboutComponent} />
      <Tab.Screen name="Stats" component={PokemonTabStatsComponent} />
      <Tab.Screen
        name="Moves"
        component={() => {
          return (
            <View
              style={{
                flex: 1,
                backgroundColor: "#A7ECEE",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Moves</Text>
            </View>
          );
        }}
      />
      <Tab.Screen
        name="Evolution"
        component={() => {
          return (
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFEEBB",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Evolution</Text>
            </View>
          );
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBarAndroidRipple: {
    color: "transparent",
  },
  tabBarStyle: {
    elevation: 0,
    shadowColor: "transparent",
  },
  tabBarIndicatorStyle: {
    width: "4%",
    backgroundColor: COLORS.primaryBlue,
    left: (TAB_BAR_WIDTH - TAB_BAR_INDICATOR_WIDTH) / 2,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
  },
  tabBarLabelStyle: {
    fontFamily: FONTS.RC_Medium,
    fontSize: scaleFont(14),
    textTransform: "capitalize",
  },
});
