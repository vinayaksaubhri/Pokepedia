import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => {
  const scaledWidth = (width / guidelineBaseWidth) * size;
  return scaledWidth < 1 ? scaledWidth : Math.floor(scaledWidth);
};
const verticalScale = (size: number) => {
  const scaledHeight = (height / guidelineBaseHeight) * size;
  return scaledHeight < 1 ? scaledHeight : Math.floor(scaledHeight);
};
const moderateScale = (size: number, factor = 0.5) => {
  const moderatedScale = size + (horizontalScale(size) - size) * factor;
  return moderatedScale < 1 ? moderatedScale : Math.floor(moderatedScale);
};

const scaleFont = (size: number): number =>
  Math.floor(size * PixelRatio.getFontScale());

export {
  horizontalScale,
  verticalScale,
  moderateScale,
  width,
  height,
  scaleFont,
};
