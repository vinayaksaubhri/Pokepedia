import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const FairyIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G clipPath="url(#a)" scale={scale}>
        <Path
          fill="#FB89EB"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="m4.64 11.295 1.802-.522L8 13.619a.005.005 0 0 0 .01 0l1.556-2.846 1.803.522a.005.005 0 0 0 .006-.006l-.523-1.767 2.769-1.514a.005.005 0 0 0 0-.01l-2.791-1.526.545-1.844a.005.005 0 0 0-.006-.007l-1.845.535-1.515-2.769a.005.005 0 0 0-.01 0l-1.514 2.77L4.64 4.62a.005.005 0 0 0-.007.007l.545 1.844-2.79 1.526a.005.005 0 0 0 0 .01l2.768 1.514-.523 1.767a.005.005 0 0 0 .007.006Zm1.398-3.272 1.277.698.699 1.277a.005.005 0 0 0 .009 0l.698-1.277 1.277-.698a.005.005 0 0 0 0-.01l-1.277-.698-.698-1.277a.005.005 0 0 0-.01 0l-.698 1.277-1.277.698a.005.005 0 0 0 0 .01Z"
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
export default FairyIcon;
