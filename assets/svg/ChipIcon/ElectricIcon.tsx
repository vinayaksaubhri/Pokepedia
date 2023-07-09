import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const ElectricIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      {...props}
    >
      <G clipPath="url(#a)" scale={scale}>
        <Path
          fill="#FBD100"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="m11.35 8.68-1.7-5.254H5.982L6.97 6.38H4.153l5.545 6.576L8.614 8.68h2.736Z"
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
export default ElectricIcon;
