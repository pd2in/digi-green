import React, {useCallback, useEffect, useState} from 'react';
import {View, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";
import * as Location from "expo-location";
import * as SplashScreen from "expo-splash-screen";
import {PrimaryButton} from "../../components";
import {useSafeAreaInsets} from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

function Login({navigation}) {
  const insets = useSafeAreaInsets()
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/font/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../../assets/font/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/font/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/font/Poppins-Bold.ttf'),
  });
  const [status, requestPermission] = Location.useForegroundPermissions()
  const [locationGranted, setLocationGranted] = useState(false)

  const getLocationPermission = () => {
    requestPermission()
        .then(r => r)
        .catch(e => alert(e.toString()))
  }

  useEffect(() => {
    if (status?.granted) {
      setLocationGranted(true)
    } else if (!status?.granted && status?.canAskAgain) {
      getLocationPermission()
    }
  }, [status]);

  useEffect(() => {
    getLocationPermission()
  }, []);

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
        <View style={{marginTop: insets.top, marginHorizontal: 24}}>
          <Text style={{fontFamily: 'Poppins-SemiBold'}}>Ini halaman login</Text>
          <PrimaryButton text="LOGIN" onPress={() => navigation.navigate('Home')}/>
        </View>
      </View>
  );
}

export default Login;
