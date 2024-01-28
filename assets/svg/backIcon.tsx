import * as React from "react";
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg";
const BackIcon = ({ color = "#1C1B1F" }: SvgProps) => (
  <Svg width={24} height={24} fill="none">
    <Mask
      id="a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </Mask>
    <G>
      <Path
        fill={color}
        d="m15.3 20.925-8.325-8.3a.81.81 0 0 1-.187-.288.922.922 0 0 1 0-.675.813.813 0 0 1 .187-.287L15.3 3.05c.2-.2.433-.3.7-.3.266 0 .508.108.725.325.2.183.3.412.3.687 0 .275-.1.513-.3.713L9.175 12l7.55 7.55a.918.918 0 0 1 .275.675c0 .267-.1.5-.3.7-.2.2-.434.3-.7.3a.96.96 0 0 1-.7-.3Z"
      />
    </G>
  </Svg>
);
export default BackIcon;
