import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const FightingIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G clipPath="url(#a)" scale={scale}>
        <Path
          fill="#E0306A"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#FEFEFE"
          d="M8.752 11.555c-1.201 0-2.403-.003-3.604.002-.24 0-.348-.064-.348-.343.003-2.097-.002-4.195-.004-6.292v-.09c.01-.156.09-.239.246-.244.115-.004.23-.001.345-.001.19 0 .381.008.57-.002.302-.016.36.11.357.348-.008.566-.002 1.131-.002 1.697 0 .12-.002.24 0 .36.004.203.074.272.272.274.04 0 .08.002.12 0 .142-.008.22-.083.223-.228.004-.175.001-.35.001-.526V4.964l.001-.12c.006-.172.088-.253.263-.257.146-.003.29 0 .436 0 .18 0 .36-.002.54 0 .194.002.273.08.273.275.002.68.001 1.362.001 2.042 0 .055-.002.11.006.165.017.118.093.186.213.194.064.004.13.004.195 0 .126-.008.2-.08.215-.207.006-.05.004-.1.004-.15V4.834c.006-.188.088-.272.28-.274a51.7 51.7 0 0 1 .945 0c.19.002.273.087.273.279.002.685 0 1.371.001 2.057 0 .055-.002.11.005.165.017.127.091.195.22.202.064.004.13.004.195 0 .119-.009.193-.078.209-.197.007-.054.005-.11.005-.165V4.98l.001-.135c.006-.177.082-.255.26-.256.33-.003.66-.003.99 0 .175.001.256.084.263.258.002.03 0 .06 0 .09l-.005 6.246c0 .05.002.101-.004.15-.014.135-.089.208-.222.22-.05.005-.1.002-.15.002H8.75ZM4.298 9.099v2.085c0 .055.001.11-.005.165-.014.127-.083.196-.211.215-.035.005-.07.002-.105.006-.186.02-.3-.05-.386-.228-.236-.485-.492-.961-.742-1.44a.563.563 0 0 1-.072-.27c.002-.356.001-.71-.002-1.066 0-.098.021-.186.067-.273.262-.505.525-1.011.783-1.52.054-.107.128-.159.247-.153.07.004.14-.003.21.005.132.013.207.092.22.223.004.045.002.09.002.135V9.1h-.006Z"
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
export default FightingIcon;
