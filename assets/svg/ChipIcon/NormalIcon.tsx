import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const NormalIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G clipPath="url(#a)" scale={scale}>
        <Path
          fill="#919AA2"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M12.788 8.021a4.765 4.765 0 0 1-4.766 4.767 4.765 4.765 0 0 1-4.767-4.767 4.765 4.765 0 0 1 4.767-4.766 4.765 4.765 0 0 1 4.766 4.766ZM11.028 8a3.011 3.011 0 0 1-3.011 3.01A3.01 3.01 0 0 1 5.016 8a3.017 3.017 0 0 1 3.01-3.01A3.003 3.003 0 0 1 11.028 8Z"
          clipRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default NormalIcon;
