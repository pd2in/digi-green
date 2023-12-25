import {NavigationContainer} from "@react-navigation/native";
import Router from "./src/router";
import {useFonts} from "expo-font";
import {useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";

export default function App() {

    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./src/assets/font/Poppins-Regular.ttf'),
        'Poppins-Medium': require('./src/assets/font/Poppins-Medium.ttf'),
        'Poppins-Semibold': require('./src/assets/font/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('./src/assets/font/Poppins-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

  return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
  );
}

