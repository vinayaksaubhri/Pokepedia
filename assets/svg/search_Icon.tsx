import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import useTheme from "../../hooks/useTheme";
import { COLORS, DARK_COLORS } from "../../style/style";
const SearchIcon = (props: SvgProps) => {
  const { isDarkMode } = useTheme();
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        fill={isDarkMode ? DARK_COLORS.white : COLORS.primaryBlue}
        d="M19.025 20.05 13.25 14.3c-.5.417-1.075.742-1.725.975-.65.233-1.316.35-2 .35-1.716 0-3.166-.592-4.35-1.775C3.992 12.667 3.4 11.217 3.4 9.5c0-1.7.592-3.146 1.775-4.338C6.36 3.971 7.81 3.375 9.525 3.375c1.7 0 3.142.592 4.325 1.775 1.184 1.183 1.775 2.633 1.775 4.35 0 .717-.116 1.4-.35 2.05a5.612 5.612 0 0 1-.95 1.7l5.775 5.775c.134.133.2.3.2.5a.72.72 0 0 1-.225.525.733.733 0 0 1-.537.225.655.655 0 0 1-.513-.225Zm-9.5-5.925c1.284 0 2.371-.45 3.263-1.35.892-.9 1.337-1.992 1.337-3.275s-.445-2.375-1.337-3.275c-.892-.9-1.98-1.35-3.263-1.35-1.3 0-2.395.45-3.287 1.35C5.346 7.125 4.9 8.217 4.9 9.5s.446 2.375 1.338 3.275c.892.9 1.987 1.35 3.287 1.35Z"
      />
    </Svg>
  );
};
export default SearchIcon;
