import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const FireIcon = (props: SvgProps) => {
  const width = props.width || 16;
  const height = props.height || 16;
  const scale = props.scale || 1;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G clipPath="url(#a)" scale={scale}>
        <Path
          fill="#FF9741"
          d="M8.003 15.63a7.627 7.627 0 1 0 0-15.254 7.627 7.627 0 0 0 0 15.254Z"
        />
        <Path
          fill="#FEFEFE"
          d="M11.449 11.638c-.002.056-.04.094-.068.136a3.25 3.25 0 0 1-1.882 1.357c-.538.147-1.086.25-1.645.21-1.414-.102-2.585-.663-3.398-1.861-.397-.587-.593-1.248-.645-1.952-.07-.958.132-1.868.478-2.752.036-.091.073-.181.112-.27.01-.024.014-.064.053-.053.022.006.017.038.017.06v.171c.002.685.062 1.362.268 2.02.068.218.15.432.248.64.011.024.022.058.057.047.01-.003.014-.042.011-.063a8.702 8.702 0 0 1-.053-.857c-.025-1.114.259-2.12 1.046-2.946.218-.227.445-.445.702-.63.205-.148.397-.31.57-.495.33-.349.493-.766.515-1.242a3.69 3.69 0 0 0-.08-.87c-.007-.034-.014-.067-.019-.101 0-.01.004-.03.008-.031a.105.105 0 0 1 .045.005c.01.004.018.014.027.022.43.4.818.834 1.09 1.362.24.47.343.968.303 1.495-.013.169-.011.17-.178.22a1.177 1.177 0 0 0-.821 1.18c.021.505.362.95.853 1.084.618.167 1.249-.211 1.417-.85.07-.268.045-.533-.019-.798a3.85 3.85 0 0 0-.138-.443c-.011-.03-.044-.069-.01-.092.03-.02.063.015.092.032.669.397 1.2.927 1.497 1.652.518 1.267.383 2.473-.433 3.575-.531.717-1.268 1.069-2.168 1.057-.108-.001-.216-.017-.325-.028-.028-.003-.063-.001-.075-.031-.013-.034.022-.048.042-.065.036-.029.074-.055.108-.086.48-.44.662-.986.518-1.617-.142-.62-.534-1.03-1.153-1.199-.805-.219-1.653.282-1.885 1.11-.167.592-.03 1.127.359 1.59.475.567 1.095.869 1.831.937.713.066 1.39-.083 2.05-.336.229-.089.45-.197.675-.297l.003.003Z"
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
export default FireIcon;
