import React, {useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import * as Location from 'expo-location';
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Accuracy} from "expo-location";
import {DoorOutIcon} from "../../assets/svgs";

SplashScreen.preventAutoHideAsync();

function Home({navigation, route}) {
  const {locationData} = route.params
  const insets = useSafeAreaInsets()
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/font/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../../assets/font/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../assets/font/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../assets/font/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    console.log(locationData)
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
        <View style={{marginTop: insets.top ,marginHorizontal: 24}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{justifyContent: 'center', marginRight: 10}}>
                <Image
                    source={{uri: "https://source.unsplash.com/random/300×300"}}
                    style={{width: 40, height: 40, borderRadius: 20}}
                />
              </View>
              <View>
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: 15}}>Selamat Pagi, Andi</Text>
                <Text style={{fontFamily: 'Poppins-Medium', fontSize: 13}}>Selasa, 26 Desember 2023</Text>
              </View>
            </View>
            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 10}}>
              <DoorOutIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

export default Home;
