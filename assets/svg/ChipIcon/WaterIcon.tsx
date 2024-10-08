import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const WaterIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G clipPath="url(#a)" scale={scale}>
        <Path
          fill="#3692DC"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#FEFEFE"
          d="M8.036 13.223c-1.834-.02-3.247-1.26-3.599-2.873-.159-.729-.09-1.442.177-2.14.407-1.071.945-2.074 1.553-3.04.532-.846 1.073-1.685 1.61-2.527.062-.097.12-.196.18-.294.032-.052.062-.051.092 0l.025.04c.575.948 1.2 1.863 1.783 2.806.529.855 1.02 1.73 1.396 2.665.148.369.298.736.356 1.134.158 1.096-.106 2.08-.818 2.927-.66.788-1.519 1.21-2.544 1.288l-.21.014Zm-.234-1.15c.375.001.73-.08 1.053-.268.632-.368.995-.91 1.025-1.653.002-.055.024-.149-.019-.158-.07-.015-.074.081-.103.13-.363.629-.907.978-1.631 1.007a1.913 1.913 0 0 1-1.99-1.95c.001-.042.003-.084.002-.126 0-.014-.004-.034-.014-.04-.024-.015-.037.008-.05.024a.64.64 0 0 0-.044.064c-.38.636-.416 1.29-.046 1.935.398.694 1.028 1.012 1.817 1.034Z"
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
export default WaterIcon;
