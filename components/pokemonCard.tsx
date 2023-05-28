import { StyleSheet, Text, View } from "react-native";
import { width } from "../style/metrics";
import { COLORS, FONTS } from "../style/style";
import PokeballIcon from "../assets/svg/pokeball_icon";
import TypeBadge from "./typeBadge";

const PokemonCard = () => {
  return (
    <View
      style={{
        width: width * 0.42,
        backgroundColor: "#38BF4B",
        height: 100,
        borderRadius: 16,
        padding: 12,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontFamily: FONTS.RC_Regular,
            fontSize: 12,
            color: COLORS.surface,
          }}
        >
          Bulbasaur
        </Text>
        <Text
          style={{
            fontFamily: FONTS.RC_Regular,
            fontSize: 12,
            color: COLORS.surface,
          }}
        >
          #001
        </Text>
      </View>

      <TypeBadge />

      <View style={{ right: -10, bottom: -20, position: "absolute" }}>
        <PokeballIcon />
      </View>
    </View>
  );
};
export default PokemonCard;
const styles = StyleSheet.create({});
