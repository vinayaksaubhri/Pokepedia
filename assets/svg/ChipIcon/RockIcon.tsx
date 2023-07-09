import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const RockIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G clipPath="url(#a)" scale={scale}>
        <Path
          fill="#C8B686"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="m10.889 7.78-.001-.003.675-3.936c0-.002.002-.003.004-.003h.213c.002 0 .003 0 .004.002l1.52 4.816v.004l-1.122.875a.004.004 0 0 1-.005 0L10.889 7.78Zm-8.187 2.61.003.003 2.311.756h.003l5.167-3.568.002-.002.554-3.718a.004.004 0 0 0-.004-.004H6.162l-.003.001-3.456 4.169V10.389Zm3.277.951 2.526.827h.003l3.006-2.157a.004.004 0 0 0 .001-.005L10.388 8.33a.004.004 0 0 0-.005-.001l-4.404 3.013Z"
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
export default RockIcon;
