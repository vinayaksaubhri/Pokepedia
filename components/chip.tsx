import { StyleSheet, Text, View } from "react-native";
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

export type IconTypes =
  | "bug"
  | "dark"
  | "electric"
  | "dragon"
  | "fire"
  | "grass"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "rock"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "ground"
  | "steel"
  | "water"
  | "";
type PropsType = {
  label: string;
  iconType?: IconTypes;
  showCrossIcon?: Boolean;
  showTypeIcon?: Boolean;
};

const Chip: React.FC<PropsType> = ({
  label = "chip",
  iconType = "",
  showCrossIcon = false,
  showTypeIcon = false,
}) => {
  return (
    <View style={styles.container}>
      {showTypeIcon && <ChipIcon iconType={iconType} />}
      <Text style={styles.labelStyle}>{label}</Text>
      {showCrossIcon && <CrossIcon />}
    </View>
  );
};
export default Chip;
const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: "flex-start",
    borderColor: COLORS.grey200,
    gap: 8,
  },
  labelStyle: {
    fontFamily: FONTS.RC_Bold,
    color: COLORS.primaryBlue,
    fontSize: 14,
  },
});

export function ChipIcon({ iconType }: { iconType: IconTypes }) {
  switch (iconType) {
    case "bug":
      return <BugIcon />;
    case "electric":
      return <ElectricIcon />;
    case "dark":
      return <DarkIcon />;
    case "dragon":
      return <DragonIcon />;
    case "fairy":
      return <FairyIcon />;
    case "fighting":
      return <FightingIcon />;
    case "fire":
      return <FireIcon />;
    case "flying":
      return <FlyingIcon />;
    case "ghost":
      return <GhostIcon />;
    case "grass":
      return <GrassIcon />;
    case "ground":
      return <GroundIcon />;
    case "ice":
      return <IceIcon />;
    case "normal":
      return <NormalIcon />;
    case "poison":
      return <PoisonIcon />;
    case "psychic":
      return <PsychicIcon />;
    case "steel":
      return <SteelIcon />;
    case "water":
      return <WaterIcon />;
    case "rock":
      return <RockIcon />;
    default:
      return <></>;
  }
}
