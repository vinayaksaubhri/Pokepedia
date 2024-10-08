import * as React from "react";
import Svg, { Path } from "react-native-svg";
import useTheme from "../../hooks/useTheme";
import { COLORS, DARK_COLORS } from "../../style/style";
const CompareArrowIcon: React.FC<
  JSX.Element & {
    isFocused?: boolean;
  }
> = ({ isFocused }) => {
  const { isDarkMode } = useTheme();

  return (
    <Svg width={22} height={16} fill="none">
      <Path
        fill={
          isFocused
            ? COLORS.primaryBlue
            : isDarkMode
            ? DARK_COLORS.bottomTabBarIconColor
            : COLORS.primaryBlue
        }
        d="M14.431 9.219 10.64 5.427a.879.879 0 0 1-.203-.312.999.999 0 0 1 0-.731.88.88 0 0 1 .203-.311L14.43.28A.78.78 0 0 1 15 .038a.78.78 0 0 1 .569.243.78.78 0 0 1 .243.569.872.872 0 0 1-.243.596l-2.492 2.492h7.34c.234 0 .429.076.582.23.154.153.23.347.23.582a.788.788 0 0 1-.812.813h-7.34l2.492 2.491c.162.18.243.375.243.582a.765.765 0 0 1-.243.556c-.163.18-.348.275-.555.285-.208.008-.402-.078-.583-.258Zm-8.666 6.473c.162.18.352.27.568.27a.78.78 0 0 0 .57-.243l3.79-3.792a.893.893 0 0 0 .204-.312 1.012 1.012 0 0 0 0-.731.895.895 0 0 0-.203-.311L6.902 6.78a.78.78 0 0 0-.569-.243.78.78 0 0 0-.568.243.78.78 0 0 0-.244.569c0 .217.081.415.244.596l2.491 2.492H.916a.788.788 0 0 0-.812.812.787.787 0 0 0 .813.813h7.34l-2.492 2.491a.856.856 0 0 0-.244.582c0 .208.081.393.244.556Z"
      />
    </Svg>
  );
};

export default CompareArrowIcon;
