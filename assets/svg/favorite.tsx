import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Favorite = (props: SvgProps) => (
  <Svg width={22} height={19} fill="none" {...props}>
    <Path
      fill="#283141"
      d="M9.673 17.854 8.129 16.42c-1.932-1.752-3.651-3.472-5.159-5.16C1.462 9.57.708 7.76.708 5.829c0-1.535.52-2.821 1.558-3.86C3.304.931 4.59.413 6.125.413c.867 0 1.729.202 2.587.608.857.407 1.62 1.062 2.288 1.964.668-.902 1.431-1.557 2.29-1.964.856-.406 1.718-.608 2.585-.608 1.535 0 2.821.518 3.859 1.556 1.038 1.039 1.558 2.325 1.558 3.86 0 1.95-.768 3.778-2.302 5.484a70.715 70.715 0 0 1-5.146 5.133l-1.517 1.381c-.38.361-.822.542-1.327.542-.506 0-.948-.172-1.327-.515Zm.542-13.216c-.578-.903-1.192-1.562-1.842-1.978-.65-.415-1.4-.622-2.248-.622-1.083 0-1.986.36-2.708 1.083-.723.722-1.084 1.625-1.084 2.708 0 .867.28 1.774.84 2.722a17.56 17.56 0 0 0 2.112 2.83 39.483 39.483 0 0 0 2.749 2.749c.984.894 1.9 1.729 2.75 2.505a.293.293 0 0 0 .216.082c.09 0 .162-.027.217-.082.848-.776 1.765-1.611 2.75-2.505.983-.894 1.899-1.81 2.748-2.749a17.56 17.56 0 0 0 2.112-2.83c.56-.948.84-1.855.84-2.722 0-1.083-.362-1.986-1.084-2.708-.722-.722-1.625-1.083-2.708-1.083-.849 0-1.598.207-2.248.622-.65.416-1.264 1.075-1.842 1.978a.943.943 0 0 1-.352.297.961.961 0 0 1-.433.109.961.961 0 0 1-.433-.109.943.943 0 0 1-.352-.297Z"
    />
  </Svg>
);
export default Favorite;
