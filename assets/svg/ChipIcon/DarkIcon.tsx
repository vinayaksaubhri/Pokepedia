import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const DarkIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G scale={scale}>
        <Path
          fill="#5B5466"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M6.744 11.91c.222.029.45.044.68.044 2.467 0 4.466-1.743 4.466-3.893 0-2.15-2-3.894-4.465-3.894-.166 0-.33.008-.49.023a4.544 4.544 0 0 1 2.032 3.8 4.541 4.541 0 0 1-2.223 3.92Zm1.259.945a4.852 4.852 0 1 0 0-9.704 4.852 4.852 0 0 0 0 9.704Z"
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
export default DarkIcon;
