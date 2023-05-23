import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const DragonIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#006FC9"
        d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
      />
      <Path
        fill="#FEFEFE"
        d="M7.946 11.262c.936.01 1.638-.394 2.059-1.232.521-1.042.11-2.315-.91-2.887-.024-.013-.047-.03-.073-.038-.092-.032-.121-.09-.107-.19.016-.107.016-.218.016-.327-.002-.299-.122-.553-.303-.782-.01-.013-.023-.022-.034-.033-.012.017-.002.031.005.045.15.282.164.587.155.896a.857.857 0 0 1-.1.361.46.46 0 0 1-.365.268c-1.015.175-2.015.424-3.014.675-.696.174-1.395.336-2.093.503-.026.006-.053.014-.08.017-.014.002-.039-.002-.042-.01-.006-.012 0-.032.007-.045.013-.025.028-.047.043-.07a35.604 35.604 0 0 0 1.502-2.626.734.734 0 0 1 .236-.265c.806-.57 1.602-1.152 2.35-1.797a12.258 12.258 0 0 0 1.674-1.762l.072-.09c.006-.008.017-.019.024-.018.023.003.018.022.015.037l-.025.13c-.125.651-.371 1.258-.683 1.842-.117.218-.113.218.137.225a4.656 4.656 0 0 1 4.34 3.317 4.642 4.642 0 0 1-2.093 5.34c-.279.166-.573.299-.879.406a.317.317 0 0 1-.25-.014c-.377-.166-.698-.412-1.002-.683a4.977 4.977 0 0 1-.948-1.13c-.025-.042-.03-.068.038-.065.109.005.218.002.328.002ZM6.398 5.906l-.028-.26c-.002-.022-.01-.043-.014-.064-.01-.041-.034-.054-.072-.032a.863.863 0 0 0-.069.044c-.516.36-.941.814-1.318 1.315-.057.077-.046.097.058.1.433.01.819-.117 1.148-.402a.837.837 0 0 0 .295-.7Z"
      />
      <Path
        fill="#FEFEFE"
        d="M7.727 13.247a7.369 7.369 0 0 1-1.29-.24c-.675-.202-1.246-.579-1.766-1.046-.737-.66-1.2-1.484-1.464-2.429-.03-.104-.029-.107.083-.118a13.073 13.073 0 0 0 2.087-.357c.403-.106.796-.24 1.183-.393.051-.02.102-.04.154-.058a.042.042 0 0 1 .03.003c.02.01.012.027.004.041l-.06.098c-.062.103-.126.206-.186.31-.304.531-.38 1.099-.28 1.699a3.361 3.361 0 0 0 1.162 2.058c.162.14.327.276.489.415.013.011.043.015.031.042-.001.004-.03-.004-.047-.006l-.13-.019Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default DragonIcon;
