import * as React from "react";
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg";
const DiceIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Mask
      id="a"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="#D9D9D9" d="M0 0h40v40H0z" />
    </Mask>
    <G>
      <Path
        fill="#1C1B1F"
        d="M13 28.833c.5 0 .924-.174 1.271-.521.347-.347.521-.784.521-1.312 0-.5-.174-.924-.521-1.271-.347-.347-.785-.521-1.313-.521-.5 0-.923.174-1.27.521-.347.347-.521.785-.521 1.313 0 .5.174.923.521 1.27.347.347.784.521 1.312.521Zm0-14.041c.5 0 .924-.174 1.271-.521.347-.347.521-.785.521-1.313 0-.5-.174-.923-.521-1.27-.347-.347-.785-.521-1.313-.521-.5 0-.923.174-1.27.521-.347.347-.521.784-.521 1.312 0 .5.174.924.521 1.271.347.347.784.521 1.312.521Zm7 7.041c.5 0 .93-.18 1.292-.541.36-.361.541-.792.541-1.292s-.18-.93-.541-1.292A1.765 1.765 0 0 0 20 18.167c-.5 0-.93.18-1.292.541-.36.361-.541.792-.541 1.292s.18.93.541 1.292c.361.36.792.541 1.292.541Zm7.042 7c.5 0 .923-.174 1.27-.521.347-.347.521-.784.521-1.312 0-.5-.174-.924-.521-1.271-.347-.347-.784-.521-1.312-.521-.5 0-.924.174-1.271.521-.347.347-.521.785-.521 1.313 0 .5.174.923.521 1.27.347.347.785.521 1.313.521Zm0-14.041c.5 0 .923-.174 1.27-.521.347-.347.521-.785.521-1.313 0-.5-.174-.923-.521-1.27-.347-.347-.784-.521-1.312-.521-.5 0-.924.174-1.271.521-.347.347-.521.784-.521 1.312 0 .5.174.924.521 1.271.347.347.785.521 1.313.521ZM8.458 34.167c-.722 0-1.34-.257-1.854-.771a2.528 2.528 0 0 1-.771-1.854V8.458c0-.722.257-1.34.771-1.854a2.528 2.528 0 0 1 1.854-.771h23.084c.722 0 1.34.257 1.854.771s.771 1.132.771 1.854v23.084c0 .722-.257 1.34-.771 1.854a2.528 2.528 0 0 1-1.854.771H8.458Zm0-2.084h23.084a.52.52 0 0 0 .375-.166.52.52 0 0 0 .166-.375V8.458a.52.52 0 0 0-.166-.375.52.52 0 0 0-.375-.166H8.458a.52.52 0 0 0-.375.166.52.52 0 0 0-.166.375v23.084a.52.52 0 0 0 .166.375.52.52 0 0 0 .375.166Z"
      />
    </G>
  </Svg>
);
export default DiceIcon;
