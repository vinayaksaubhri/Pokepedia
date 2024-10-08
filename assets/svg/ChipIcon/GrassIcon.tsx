import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const GrassIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G clipPath="url(#a)" scale={scale}>
        <Path
          fill="#38BF4B"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#FEFEFE"
          d="M8.55 10.268h-1.3c-.047 0-.076-.013-.043-.066l.05-.08c.33-.53.66-1.058.987-1.589.054-.087.112-.133.222-.145.651-.067 1.302-.145 1.952-.22a.549.549 0 0 0 .109-.02c.08-.026.124-.082.123-.146-.002-.064-.048-.123-.125-.147a.865.865 0 0 0-.155-.03L9 7.66c-.232-.028-.184-.04-.095-.182l1.313-2.095c.03-.05.06-.1.088-.15a.255.255 0 0 0 .035-.137c-.006-.12-.103-.178-.21-.123-.067.035-.117.09-.168.144l-1.708 1.81c-.161.171-.141.167-.225-.045l-.494-1.253c-.02-.049-.04-.098-.066-.143-.046-.078-.121-.115-.183-.098-.063.018-.108.088-.108.176 0 .037.006.074.012.11.09.633.18 1.266.274 1.898a.317.317 0 0 1-.093.297c-.427.44-.845.887-1.267 1.332-.022.023-.043.047-.066.069-.059.056-.067.056-.088-.023-.114-.429-.228-.857-.34-1.286-.102-.389-.201-.777-.302-1.166-.019-.072-.038-.143-.098-.194-.091-.078-.197-.053-.243.058-.023.057-.016.115-.01.173l.116 1.214.14 1.483c.015.152.025.305.043.457a.19.19 0 0 1-.055.17c-.304.317-.604.637-.906.955-.078.082-.082.082-.156-.004a3.96 3.96 0 0 1-.89-1.73c-.291-1.264-.098-2.445.639-3.523.33-.483.762-.856 1.262-1.16.885-.539 1.844-.883 2.847-1.122.767-.182 1.54-.325 2.325-.395a12.32 12.32 0 0 1 1.282-.047c.117.002.12.002.15.117.113.429.208.862.277 1.3.166 1.042.223 2.09.195 3.144-.018.645-.071 1.286-.25 1.911a5.232 5.232 0 0 1-.747 1.583c-.549.784-1.308 1.284-2.225 1.532a4.34 4.34 0 0 1-3.115-.298c-.029-.015-.032-.04-.018-.067.015-.028.032-.054.05-.08.208-.337.42-.672.625-1.011a.267.267 0 0 1 .212-.138c.74-.112 1.481-.23 2.222-.347.276-.043.553-.087.829-.132a.76.76 0 0 0 .153-.037c.078-.03.126-.103.12-.17-.007-.079-.06-.12-.126-.148-.06-.026-.124-.022-.187-.022H8.55v.001Z"
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
export default GrassIcon;
