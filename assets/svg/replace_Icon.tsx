import * as React from "react";
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg";
const ReplaceIcon = (props: SvgProps) => (
  <Svg width={25} height={25} fill="none" {...props}>
    <Mask
      id="a"
      width={25}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M.5.692h24v24H.5z" />
    </Mask>
    <G>
      <Path
        fill="#283141"
        d="M12.55 20.442c-2.167 0-4.009-.754-5.525-2.262-1.517-1.508-2.275-3.338-2.275-5.488v-.775l-1.85 1.85-1.05-1.05L5.5 9.042l3.65 3.675-1.05 1.05-1.85-1.85v.775c0 1.734.612 3.209 1.838 4.425 1.224 1.217 2.712 1.825 4.462 1.825.416 0 .829-.045 1.238-.137.408-.092.812-.23 1.212-.413l1.125 1.125c-.567.3-1.15.53-1.75.687-.6.159-1.209.238-1.825.238Zm6.95-4.1-3.65-3.675 1.05-1.05 1.85 1.85v-.775c0-1.733-.613-3.208-1.837-4.425-1.226-1.216-2.713-1.825-4.463-1.825-.417 0-.83.046-1.237.137-.41.092-.813.23-1.213.413L8.875 5.867c.566-.3 1.15-.529 1.75-.688a7.137 7.137 0 0 1 1.825-.237c2.166 0 4.008.754 5.525 2.262 1.516 1.51 2.275 3.338 2.275 5.488v.775l1.85-1.85 1.05 1.05-3.65 3.675Z"
      />
    </G>
  </Svg>
);
export default ReplaceIcon;
