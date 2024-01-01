import { useState } from "react";
import Slider from "react-native-custom-slider";
import { COLORS, DARK_COLORS } from "../style/style";
import CustomThumb from "./customThumb";
import useTheme from "../hooks/useTheme";

const CustomSlider: React.FC<{
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}> = ({ value, setValue, ...rest }) => {
  const [thumbVisible, setThumbVisible] = useState(false);
  const { isDarkMode } = useTheme();
  return (
    <Slider
      minimumValue={0}
      maximumValue={100}
      tapToSeek
      thumbTintColor={COLORS.primaryBlue}
      maximumTrackTintColor={isDarkMode ? DARK_COLORS.white : COLORS.grey200}
      minimumTrackTintColor={isDarkMode ? DARK_COLORS.white : COLORS.grey200}
      step={10}
      onSlidingStart={() => setThumbVisible(true)}
      onSlidingComplete={() => setThumbVisible(false)}
      customThumb={<CustomThumb value={value} thumbVisible={thumbVisible} />}
      {...rest}
    />
  );
};
export default CustomSlider;
