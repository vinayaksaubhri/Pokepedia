import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { height, scaleFont, width } from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
import { StyleSheet } from "react-native";
import PokemonTabAboutComponent from "./pokemonTabAboutComponent";
import PokemonTabStatsComponent from "./pokemonTabStatsComponent";
import PokemonTabMovesComponent from "./pokemonTabMovesComponent";
import PokemonTabEvolutionComponent from "./pokemonTabEvolutionComponent";

const Tab = createMaterialTopTabNavigator();

const TAB_BAR_WIDTH = width / 4;
const TAB_BAR_INDICATOR_WIDTH = width * 0.04;

type PokemonDetailScreenTabProps = {
  pokemonWeight: number;
  pokemonHeight: number;
  pokemonDescription: string[];
  pokemonCategories: {
    pokemonCategory: {
      name: string;
      badgeType: string;
    };
  }[];
  pokemonAbilities: {
    pokemonAbility: {
      name: string;
    };
  }[];
  pokemonStats: {
    attack: number;
    defense: number;
    hp: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
};

export const PokemonDetailScreenTab: React.FC<PokemonDetailScreenTabProps> = ({
  pokemonStats,
  pokemonWeight,
  pokemonHeight,
  pokemonDescription,
  pokemonCategories,
  pokemonAbilities,
}) => {
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
      <Tab.Screen
        name="About"
        component={PokemonTabAboutComponent}
        initialParams={{
          pokemonWeight,
          pokemonCategories,
          pokemonHeight,
          pokemonDescription,
          pokemonAbilities,
        }}
      />
      <Tab.Screen
        name="Stats"
        component={PokemonTabStatsComponent}
        initialParams={{ pokemonStats }}
      />
      <Tab.Screen name="Moves" component={PokemonTabMovesComponent} />
      <Tab.Screen name="Evolution" component={PokemonTabEvolutionComponent} />
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
