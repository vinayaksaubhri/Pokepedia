import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";
const Charizard = (props: SvgProps) => (
  <Svg width={260} height={260} fill="none" {...props}>
    <Path fill="url(#a)" d="M0 0h260v260H0z" />
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAALVBMVEXYwID4wGDwaEDwuCAoqLj4+PjQ0NAgeJDw0IgQEBCoQAD4kEAYUHDQaFAAAADashacAAAAD3RSTlP//////////////////wDU3JihAAADsklEQVRYw6WXiXLrMAhFZXm9KMr/f+4DAVq8JH0tmc6kse8xIAlweP/RwtOFTH8D5Gk6EXL+HwBN00nAvxD9FECUpksIlNJdWFdAzjnxvbhi+crViXCnvtUr4YIIvVbFLL/VK+CMCC3soswA8jNAGXQFcI4neTBebBCALAKJoQ+QXkRPAFMbQPYB/yhuEcTEcWIA20CogORyIZBExAxeTOLEyKYQlQHoDtDr5dFTYQDbRpqbzoMhiOCbhAE7m1yfism+WbCumeUE0izS6+yCA7LqhUASf+qsrskjgG93PQOQBmuLKq6/zjEEd2DvACXtrs6V4A4MLgRzYG+AFzbO4LYxg1NHbed8APQOsK3swCp7qKy/u8Bf6jq1GMLVAX0CmRYeRM3A6MItwC4XrR0ADPozwCJYTgDKMTogU6+/Byz8GUJkfaxRwPX7eBxCjUD0u90gOSgORLQsdPphFQywLOrBbgR+JD+/6Xk7N8INYBHb99duhEyyjiuH5wBzYe8BswKyAUoOVc/3yH4UvdzQAPsQQgMs6sGreiCH0s6RA0oMu+XwXQEeAT9v8QiUUE7EuwEyTosY33M0AOv5B5HyE0RXaxtpR7kBzANAj1txsHwzhBBErwQaAXOcK8AOPLtQCwUsCi33yVzgezwFs5gA+IxVgOrJCKUkoOm1LKgDsQCiAfo2wsu2GqGrSukMYA8i6y8ALiTYVv0f2mVrWZK+UwgcAROiEgIGANcRSC0SlK1+bgbSwsJbFLPqC6CLgNVZ8gbrBoNeqnvZHFzsudrEeMwXgBYRbmclf8CgFxe0SLKTG6Is4wXwhiES0CmDWANkrrsMEEJ449zKVdnrw6GWvcpKxeQI4nHE2xkJGB5/uAX4VbwlgZKE0I9WnvmMrqmEo1nnbFkC2YlVnKZqSK0tHcc9QAjkgEHtgHzVDwCpeLG2NjUdlBIenn+Ebt6hFMnLem6bXttZjeA4A3gdqM5kDZCHfo70BKCsw2aZexK8sSAPhHoIM4WLA61Gm94BHQI634gHFMLoQAO4viSx/igf+ISkgNAxdBN3B7sCQkdAqnonhKN8yKSwRHYjDkKo563Ny/JfaAT00855ToSdtuJhPxuFSkD+BOADYndiPP+ux5O+jfuGuAO0swl8emOR7IwEK2CtwX9/YxmrGLoyZ+uU8PWdqfbSNkSg7jWphV8AVBpBP+F6eFJuuBx/Baw62tFNxr3hfwLQuhGP+PxH+NWrb2kbW/n7/buzuIkf6p/f3n9q/wBM77Z1nSj0UAAAAABJRU5ErkJggg=="
        id="b"
        width={64}
        height={64}
      />
    </Defs>
  </Svg>
);
export default Charizard;
