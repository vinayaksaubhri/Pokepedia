import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const GroundIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G clipPath="url(#a)" scale={scale}>
        <Path
          fill="#E87236"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M5.209 10.904a.004.004 0 0 1-.004-.005l2.527-6.45.004-.002h3.2s.002 0 .003.002l2.49 6.45a.004.004 0 0 1-.005.005H5.21Zm-2.991.028a.004.004 0 0 1-.004-.005l1.944-5.023c.001-.002.002-.003.004-.003h1.635c.003 0 .005.003.004.005L3.918 10.93a.004.004 0 0 1-.003.002H2.218Z"
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
export default GroundIcon;
