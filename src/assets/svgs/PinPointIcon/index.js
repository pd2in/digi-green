import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PinPointIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={20}
        fill="none"
        {...props}
    >
      <Path
          fill="#fff"
          d="M8 0a8.009 8.009 0 0 0-8 8c0 3.255 2.363 5.958 4.866 8.819.792.906 1.612 1.843 2.342 2.791a1 1 0 0 0 1.584 0c.73-.948 1.55-1.885 2.342-2.791C13.637 13.958 16 11.255 16 8a8.009 8.009 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
    </Svg>
)

export default PinPointIcon
