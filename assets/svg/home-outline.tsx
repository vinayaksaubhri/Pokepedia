import * as React from "react";
import Svg, { Path } from "react-native-svg";
import useTheme from "../../hooks/useTheme";
import { COLORS, DARK_COLORS } from "../../style/style";
const HomeOutlinedIcon: React.FC<
  JSX.Element & {
    isFocused?: boolean;
  }
> = ({ isFocused }) => {
  const { isDarkMode } = useTheme();
  return (
    <Svg width={20} height={23} fill="none">
      <Path
        fill={
          isFocused
            ? COLORS.primaryBlue
            : isDarkMode
            ? DARK_COLORS.bottomTabBarIconColor
            : COLORS.primaryBlue
        }
        d="M5 17.5c-.458 0-.85-.163-1.177-.49a1.602 1.602 0 0 1-.49-1.177v-7.5c0-.264.06-.514.178-.75S3.792 7.153 4 7l5-3.75c.153-.111.313-.194.48-.25.166-.056.34-.083.52-.083s.354.027.52.083c.168.056.327.139.48.25L16 7c.208.153.372.347.49.583s.177.486.177.75v7.5c0 .459-.164.851-.49 1.178-.327.326-.72.49-1.177.489h-3.333v-5.833H8.333V17.5H5Z"
      />
    </Svg>
  );
};

export default HomeOutlinedIcon;
