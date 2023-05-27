import { useState } from "react";
import Slider from "react-native-custom-slider";
import { COLORS } from "../style/style";
import CustomThumb from "./customThumb";

const CustomSlider = () => {
  const [value, setValue] = useState(0);
  const [thumbVisible, setThumbVisible] = useState(false);

  return (
    <Slider
      value={value}
      minimumValue={0}
      maximumValue={100}
      tapToSeek
      thumbTintColor={COLORS.primaryBlue}
      maximumTrackTintColor={COLORS.grey200}
      minimumTrackTintColor={COLORS.grey200}
      onValueChange={(value: number) => setValue(value)}
      step={10}
      onSlidingStart={() => setThumbVisible(true)}
      onSlidingComplete={() => setThumbVisible(false)}
      customThumb={<CustomThumb value={value} thumbVisible={thumbVisible} />}
    />
  );
};
export default CustomSlider;
