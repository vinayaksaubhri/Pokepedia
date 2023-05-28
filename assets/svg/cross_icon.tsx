import * as React from "react";
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg";
const CrossIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Mask
      id="a"
      width={16}
      height={16}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h16v16H0z" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fill="#4E5F7E"
        d="M8 8.933 4.733 12.2a.632.632 0 0 1-.467.183.632.632 0 0 1-.466-.183.632.632 0 0 1-.184-.467c0-.189.061-.344.184-.466L7.066 8 3.8 4.733a.632.632 0 0 1-.184-.466c0-.19.061-.345.184-.467a.632.632 0 0 1 .466-.183c.19 0 .345.06.467.183L8 7.067 11.266 3.8a.632.632 0 0 1 .467-.183c.189 0 .344.06.466.183a.632.632 0 0 1 .184.467.632.632 0 0 1-.183.466L8.933 8l3.267 3.267a.632.632 0 0 1 .183.466.632.632 0 0 1-.183.467.632.632 0 0 1-.467.183.632.632 0 0 1-.467-.183L8 8.933Z"
      />
    </G>
  </Svg>
);
export default CrossIcon;
