import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import { height, scaleFont, width } from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
import PokemonTabAboutComponent from "./pokemonTabAboutComponent";
import PokemonTabEvolutionComponent from "./pokemonTabEvolutionComponent";
import PokemonTabMovesComponent from "./pokemonTabMovesComponent";
import PokemonTabStatsComponent from "./pokemonTabStatsComponent";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const TAB_BAR_WIDTH = width / 4;
const TAB_BAR_INDICATOR_WIDTH = width * 0.04;

type PokemonDetailScreenTabProps = {
  pokemonWeight: number;
  pokemonHeight: number;
  pokemonIndex: number;
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
  pokemonMoves: {
    pokemonMove: {
      id: string;
      name: string;
    };
  }[];
  pokemonEvolutions: {
    pokemonEvolution: {
      chainData: {
        evolutionLevel: number | null;
        evolvesFrom: boolean;
        name: string;
        pokemonId: string;
        pokemonIndex: number;
        pokemonType: {
          badgeType: string;
          id: string;
          name: string;
        }[];
        trigger: string | null;
        triggerItem: any;
      }[];
      id: string;
    };
  }[];
  isMultipleEvolutions: boolean;
};

export const PokemonDetailScreenTab: React.FC<PokemonDetailScreenTabProps> = ({
  pokemonStats,
  pokemonWeight,
  pokemonHeight,
  pokemonDescription,
  pokemonCategories,
  pokemonAbilities,
  pokemonMoves,
  pokemonEvolutions,
  isMultipleEvolutions,
  pokemonIndex,
}) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.jumpTo("About");
    console.log("pokemonIndex", pokemonIndex);
  }, [pokemonIndex]);
  return (
    <Tab.Navigator
      initialLayout={{
        width: width,
        height: height / 2,
      }}
      backBehavior="none"
      initialRouteName="About"
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
      <Tab.Screen
        name="Moves"
        component={PokemonTabMovesComponent}
        initialParams={{ pokemonMoves }}
      />
      <Tab.Screen
        name="Evolution"
        component={PokemonTabEvolutionComponent}
        initialParams={{
          pokemonEvolutions,
          isMultipleEvolutions,
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
