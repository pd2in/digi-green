import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ChevronRightIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={12}
        height={20}
        fill="none"
        {...props}
    >
      <Path
          fill="#000"
          d="M3.425.588A2.004 2.004 0 1 0 .59 3.425l6.588 6.573L.59 16.572a1.997 1.997 0 0 0 0 2.837 1.995 1.995 0 0 0 2.835 0l7.985-7.992a1.998 1.998 0 0 0 0-2.837L3.424.588Z"
      />
    </Svg>
)

export default ChevronRightIcon
