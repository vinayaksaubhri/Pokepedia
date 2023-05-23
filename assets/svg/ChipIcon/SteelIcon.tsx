import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const SteelIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#5A8EA2"
        d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M2.78 8.002a.008.008 0 0 1 0-.008l2.627-4.488a.008.008 0 0 1 .007-.003h5.206c.003 0 .006 0 .007.003l2.598 4.489a.008.008 0 0 1 0 .007l-2.598 4.483a.008.008 0 0 1-.007.004H5.414a.007.007 0 0 1-.007-.004L2.78 8.003Zm7.643-.006a2.42 2.42 0 1 1-4.839 0 2.42 2.42 0 0 1 4.839 0Z"
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
export default SteelIcon;
