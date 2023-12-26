import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import {TouchableOpacity, View} from "react-native";

function Index({type, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            { type === "eye-off" &&

                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                >
                    <G fill="#000" clipPath="url(#a)">
                        <Path d="M4.71 3.29a1.004 1.004 0 1 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-16-16ZM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56-.06.01Z" />
                        <Path d="M12.22 17c-4.3.1-7.12-3.59-8-5 .626-1 1.38-1.914 2.24-2.72L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67l-1.58-1.58a7.739 7.739 0 0 1-1.7.25Zm9.65-5.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.696 13.696 0 0 1-2.29 2.72L19 16.13a15.888 15.888 0 0 0 2.91-3.63 1 1 0 0 0-.04-1Z" />
                    </G>
                    <Defs>
                        <ClipPath id="a">
                            <Path fill="#fff" d="M0 0h24v24H0z" />
                        </ClipPath>
                    </Defs>
                </Svg>

            }

            { type === "eye" &&

                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={16}
                    fill="none"
                >
                    <Path
                        fill="#000"
                        d="M19.92 7.6C17.9 2.91 14.1 0 10 0S2.1 2.91.08 7.6a1 1 0 0 0 0 .8C2.1 13.09 5.9 16 10 16s7.9-2.91 9.92-7.6a1 1 0 0 0 0-.8ZM10 14c-3.17 0-6.17-2.29-7.9-6C3.83 4.29 6.83 2 10 2s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6Zm0-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                    />
                </Svg>

            }

        </TouchableOpacity>
    );
}

export default Index;