import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { height, scaleFont, width } from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
import PokemonTabAboutComponent from "./pokemonTabAboutComponent";
import PokemonTabEvolutionComponent from "./pokemonTabEvolutionComponent";
import PokemonTabMovesComponent from "./pokemonTabMovesComponent";
import PokemonTabStatsComponent from "./pokemonTabStatsComponent";

const TAB_BAR_WIDTH = width / 4;
const TAB_BAR_INDICATOR_WIDTH = width * 0.04;
type TabKey = "About" | "Stats" | "Moves" | "Evolution";

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
  const [activeTab, setActiveTab] = useState<TabKey>("About");
  const tabs: TabKey[] = ["About", "Stats", "Moves", "Evolution"];
  const tabParams = useMemo(
    () => ({
      About: {
        pokemonWeight,
        pokemonCategories,
        pokemonHeight,
        pokemonDescription,
        pokemonAbilities,
      },
      Stats: { pokemonStats },
      Moves: { pokemonMoves },
      Evolution: { pokemonEvolutions, isMultipleEvolutions },
    }),
    [
      pokemonWeight,
      pokemonCategories,
      pokemonHeight,
      pokemonDescription,
      pokemonAbilities,
      pokemonStats,
      pokemonMoves,
      pokemonEvolutions,
      isMultipleEvolutions,
    ],
  );

  useEffect(() => {
    setActiveTab("About");
  }, [pokemonIndex]);
  return (
    <View style={styles.container}>
      <View style={styles.tabBarStyle}>
        {tabs.map((tabLabel) => {
          const isActive = tabLabel === activeTab;
          return (
            <Pressable
              key={tabLabel}
              onPress={() => setActiveTab(tabLabel)}
              style={styles.tabItem}
            >
              <Text
                style={[
                  styles.tabBarLabelStyle,
                  { color: isActive ? COLORS.primaryBlue : COLORS.grey300 },
                ]}
              >
                {tabLabel}
              </Text>
              {isActive && <View style={styles.tabBarIndicatorStyle} />}
            </Pressable>
          );
        })}
      </View>
      <View style={styles.content}>
        {activeTab === "About" && (
          <PokemonTabAboutComponent
            route={{ params: tabParams.About }}
            navigation={navigation}
          />
        )}
        {activeTab === "Stats" && (
          <PokemonTabStatsComponent
            route={{ params: tabParams.Stats }}
            navigation={navigation}
          />
        )}
        {activeTab === "Moves" && (
          <PokemonTabMovesComponent
            route={{ params: tabParams.Moves }}
            navigation={navigation}
          />
        )}
        {activeTab === "Evolution" && (
          <PokemonTabEvolutionComponent
            route={{ params: tabParams.Evolution }}
            navigation={navigation}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.surface,
    minHeight: height * 0.07,
  },
  tabBarIndicatorStyle: {
    width: TAB_BAR_INDICATOR_WIDTH,
    height: 3,
    backgroundColor: COLORS.primaryBlue,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    marginTop: 8,
  },
  tabBarLabelStyle: {
    fontFamily: FONTS.RC_Medium,
    fontSize: scaleFont(14),
    textTransform: "capitalize",
  },
  tabItem: {
    width: TAB_BAR_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
  },
  content: {
    flex: 1,
  },
});
