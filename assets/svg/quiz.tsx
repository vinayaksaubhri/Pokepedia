import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import useTheme from "../../hooks/useTheme";
import { COLORS, DARK_COLORS } from "../../style/style";
const QuizIcon: React.FC<
  JSX.Element & {
    isFocused?: boolean;
  }
> = ({ isFocused }) => {
  const { isDarkMode } = useTheme();

  return (
    <Svg width={19} height={19} fill="none">
      <Path
        fill={
          isFocused
            ? COLORS.primaryBlue
            : isDarkMode
            ? DARK_COLORS.bottomTabBarIconColor
            : COLORS.primaryBlue
        }
        d="M11.083 9.75c.15 0 .288-.054.413-.163a.605.605 0 0 0 .212-.412c.034-.25.117-.463.25-.638.134-.175.342-.395.625-.662.467-.45.784-.825.95-1.125.167-.3.25-.658.25-1.075 0-.7-.25-1.283-.75-1.75-.5-.467-1.15-.7-1.95-.7-.516 0-.983.12-1.4.362-.416.242-.75.58-1 1.013a.453.453 0 0 0-.038.425c.059.15.163.258.313.325.134.05.28.05.437 0a.718.718 0 0 0 .388-.3 1.47 1.47 0 0 1 .563-.525c.225-.117.47-.175.737-.175.434 0 .792.129 1.075.387.284.259.425.596.425 1.013 0 .25-.07.487-.212.712-.142.225-.388.496-.738.813-.4.35-.679.65-.837.9-.158.25-.254.583-.288 1a.471.471 0 0 0 .15.4.579.579 0 0 0 .425.175Zm0 3.025c.25 0 .467-.092.65-.275a.888.888 0 0 0 .275-.65.85.85 0 0 0-.275-.638.91.91 0 0 0-.65-.262.91.91 0 0 0-.65.262.85.85 0 0 0-.275.638c0 .25.092.467.275.65.184.183.4.275.65.275Zm-5.7 2.725c-.5 0-.925-.175-1.275-.525a1.736 1.736 0 0 1-.525-1.275V2.3c0-.5.175-.925.525-1.275C4.458.675 4.883.5 5.383.5h11.4c.5 0 .925.175 1.275.525.35.35.525.775.525 1.275v11.4c0 .5-.175.925-.525 1.275-.35.35-.775.525-1.275.525h-11.4Zm0-1.5h11.4a.29.29 0 0 0 .213-.088.289.289 0 0 0 .087-.212V2.3a.292.292 0 0 0-.087-.213.292.292 0 0 0-.213-.087h-11.4a.289.289 0 0 0-.212.087.29.29 0 0 0-.088.213v11.4c0 .083.03.154.088.212a.287.287 0 0 0 .212.088Zm-3.5 5c-.5 0-.925-.175-1.275-.525A1.736 1.736 0 0 1 .083 17.2V5.05c0-.2.071-.375.213-.525A.706.706 0 0 1 .833 4.3c.217 0 .396.075.537.225a.74.74 0 0 1 .213.525V17.2c0 .083.03.154.088.213a.289.289 0 0 0 .212.087h12.15c.2 0 .375.07.525.212a.71.71 0 0 1 .225.538.71.71 0 0 1-.225.538.742.742 0 0 1-.525.212H1.883Z"
      />
    </Svg>
  );
};
export default QuizIcon;
