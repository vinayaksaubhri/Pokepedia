import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";
const Bulbasaur = ({ width, height, ...props }: SvgProps) => (
  <Svg width={width - 20} height={height - 20} fill="none" {...props}>
    <Path fill="url(#a)" d="M0 0h56v56H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01563)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAALVBMVEUQEBB4qECY0EiA6MBYcEC4KCC4+HD4+PjYSEDIyMj4aGAoWGBg0KBgkJgAAABLzoDKAAAAD3RSTlP//////////////////wDU3JihAAABqklEQVRYw+2W226DQAxEvRfYEtv5/8/trA0EtVSY5KnSDi9JpDlrj80q9PxQNAADMAD/CpCetX4CSDnVXOldQEoGyG8BYJ6hDD9KoLuAlHN3w5tnFJHuAvqx3TebUq03ASnb2V4F6qiphgDKhwJSZuY82wMABQBaCncKpBn2IuoE9JKCAFFxwV5ElPIaxhnhDAAptFJ0A5yX8AegHPwOSAb4neMvgJi7yMuvlFynPdBZAQbAJ2UDMN0BiPdg/mVhtRJoA9RrQCMxAPzUmhPIusAe1Ahg6iWIFKGJ2kIOUKquqyloaY++CT2+9qC9AgRh/ssxctHHOkAAtC2WAShYTKqBVWYrHwh+TXEDcOQ+2NZnl5nVABhn4G0kpDgBo9M0NXujDuLI60wyHcSvHizNyH3ghC9o92MMFkMM0HNwvx9tSfYEejscuZEQ3BYg9492tDHOejgD9JuE1wDZvtkqaRDA7MNb41vvlDgAXvGxr/k7wL9yBOCGXgl1sV9K3k/oUpW9UrL9ZT8ay80SAGjjtu98r+BJ+IWbFxTZRMXzI1V7xp+sARiAAbjSN7tPzCYqSlfZAAAAAElFTkSuQmCC"
        id="b"
        width={width}
        height={height}
      />
    </Defs>
  </Svg>
);
export default Bulbasaur;
