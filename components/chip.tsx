import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../style/style";
import BugIcon from "../assets/svg/ChipIcon/BugIcon";
import ElectricIcon from "../assets/svg/ChipIcon/ElectricIcon";
import DarkIcon from "../assets/svg/ChipIcon/DarkIcon";
import DragonIcon from "../assets/svg/ChipIcon/DragonIcon";
import FairyIcon from "../assets/svg/ChipIcon/FairyIcon";

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
      {showTypeIcon && (
        <View style={styles.iconContainer}>
          <ChipIcon iconType={iconType} />
        </View>
      )}
      <Text style={styles.labelStyle}>{label}</Text>
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
  },
  labelStyle: {
    fontFamily: FONTS.RC_Bold,
    color: COLORS.primaryBlue,
    fontSize: 14,
  },
  iconContainer: {
    marginRight: 8,
  },
});

function ChipIcon({ iconType }) {
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
    default:
      return <></>;
  }
}
