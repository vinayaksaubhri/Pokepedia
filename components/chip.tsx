import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS } from "../style/style";
import BugIcon from "../assets/svg/ChipIcon/BugIcon";
import ElectricIcon from "../assets/svg/ChipIcon/ElectricIcon";
import DarkIcon from "../assets/svg/ChipIcon/DarkIcon";
import DragonIcon from "../assets/svg/ChipIcon/DragonIcon";
import FairyIcon from "../assets/svg/ChipIcon/FairyIcon";
import FightingIcon from "../assets/svg/ChipIcon/FightingIcon";
import FireIcon from "../assets/svg/ChipIcon/FireIcon";
import FlyingIcon from "../assets/svg/ChipIcon/FlyingIcon";
import GhostIcon from "../assets/svg/ChipIcon/GhostIcon";
import GrassIcon from "../assets/svg/ChipIcon/GrassIcon";
import GroundIcon from "../assets/svg/ChipIcon/GroundIcon";
import IceIcon from "../assets/svg/ChipIcon/IceIcon";
import NormalIcon from "../assets/svg/ChipIcon/NormalIcon";
import PoisonIcon from "../assets/svg/ChipIcon/PoisonIcon";
import PsychicIcon from "../assets/svg/ChipIcon/PsychicIcon";
import SteelIcon from "../assets/svg/ChipIcon/SteelIcon";
import WaterIcon from "../assets/svg/ChipIcon/WaterIcon";
import RockIcon from "../assets/svg/ChipIcon/RockIcon";
import CrossIcon from "../assets/svg/cross_icon";
import { PokemonTypes } from "../types/pokemonTypes";
import { horizontalScale, moderateScale, scaleFont } from "../style/metrics";

export type chipPropsType = PressableProps & {
  label: string;
  iconType?: PokemonTypes;
  showCrossIcon?: Boolean;
  showTypeIcon?: Boolean;
  showLabel?: Boolean;
  isSelected?: Boolean;
};

const Chip: React.FC<chipPropsType> = ({
  label = "chip",
  iconType = "",
  showCrossIcon = false,
  showTypeIcon = false,
  showLabel = true,
  isSelected = false,
  ...rest
}) => {
  return (
    <Pressable
      style={[isSelected ? styles.selectedStyle : styles.container]}
      {...rest}
    >
      {showTypeIcon && <ChipIcon iconType={iconType} />}
      {showLabel && <Text style={styles.labelStyle}>{label}</Text>}
      {showCrossIcon && <CrossIcon />}
    </Pressable>
  );
};
export default Chip;
const styles = StyleSheet.create({
  selectedStyle: {
    padding: moderateScale(8),
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: moderateScale(8),
    alignSelf: "flex-start",
    borderColor: COLORS.grey300,
    backgroundColor: COLORS.grey100,
    gap: horizontalScale(8),
  },
  container: {
    padding: moderateScale(8),
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: moderateScale(8),
    alignSelf: "flex-start",
    borderColor: COLORS.grey200,
    gap: horizontalScale(8),
  },
  labelStyle: {
    fontFamily: FONTS.RC_Bold,
    color: COLORS.primaryBlue,
    fontSize: scaleFont(14),
  },
});

export function ChipIcon({
  iconType,
  size = "sm",
}: {
  iconType: PokemonTypes;
  size?: "sm" | "md";
}) {
  const width = size === "sm" ? 16 : 24;
  const height = size === "sm" ? 16 : 24;
  const scale = size === "sm" ? 1 : 1.5;
  switch (iconType) {
    case "bug":
      return <BugIcon width={width} height={height} scale={scale} />;
    case "electric":
      return <ElectricIcon width={width} height={height} scale={scale} />;
    case "dark":
      return <DarkIcon width={width} height={height} scale={scale} />;
    case "dragon":
      return <DragonIcon width={width} height={height} scale={scale} />;
    case "fairy":
      return <FairyIcon width={width} height={height} scale={scale} />;
    case "fighting":
      return <FightingIcon width={width} height={height} scale={scale} />;
    case "fire":
      return <FireIcon width={width} height={height} scale={scale} />;
    case "flying":
      return <FlyingIcon width={width} height={height} scale={scale} />;
    case "ghost":
      return <GhostIcon width={width} height={height} scale={scale} />;
    case "grass":
      return <GrassIcon width={width} height={height} scale={scale} />;
    case "ground":
      return <GroundIcon width={width} height={height} scale={scale} />;
    case "ice":
      return <IceIcon width={width} height={height} scale={scale} />;
    case "normal":
      return <NormalIcon width={width} height={height} scale={scale} />;
    case "poison":
      return <PoisonIcon width={width} height={height} scale={scale} />;
    case "psychic":
      return <PsychicIcon width={width} height={height} scale={scale} />;
    case "steel":
      return <SteelIcon width={width} height={height} scale={scale} />;
    case "water":
      return <WaterIcon width={width} height={height} scale={scale} />;
    case "rock":
      return <RockIcon width={width} height={height} scale={scale} />;
    default:
      return <NormalIcon width={width} height={height} scale={scale} />;
  }
}
