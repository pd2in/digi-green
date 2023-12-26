import React, {useCallback} from 'react';
import {View, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

function Login() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/font/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../../assets/font/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/font/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/font/Poppins-Bold.ttf'),
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
      <View onLayout={onLayoutRootView}>
        <StatusBar />
        <Text>Ini halaman login</Text>
      </View>
  );
}

export default Login;
