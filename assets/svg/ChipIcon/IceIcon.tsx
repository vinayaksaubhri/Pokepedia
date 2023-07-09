import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const IceIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G clipPath="url(#a)" scale={scale}>
        <Path
          fill="#4CD1C0"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#fff"
          d="m5.018 6.68 2.725 1.325-2.725 1.322-2.724-1.322 2.724-1.326ZM10.988 6.68 8.264 8.004l2.724 1.322 2.724-1.322-2.724-1.326ZM10.988 3.27 8.264 4.702v2.808l.02-.01.04-.02 2.663-1.325V3.268ZM10.988 12.737l-2.724-1.434V8.495l.02.01.04.02 2.663 1.325v2.887ZM5.019 3.27l2.724 1.433v2.808l-.02-.01-.04-.02L5.02 6.157V3.268ZM5.019 12.737l2.724-1.434V8.495l-.02.01-.04.02L5.02 9.85v2.887Z"
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
export default IceIcon;
