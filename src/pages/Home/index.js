import React, {useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";
import * as Location from 'expo-location';
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {Accuracy} from "expo-location";
import {DoorOutIcon, PinPointIcon} from "../../assets/svgs";

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
          <View style={{backgroundColor: '#08B117', borderRadius: 16, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
            <View style={{paddingLeft: 20, paddingVertical: 10, width: '50%'}}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, color: 'white'}}>Cuaca hari ini</Text>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 48, color: 'white'}}>34°C</Text>
              <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
                <PinPointIcon/>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 15, color: 'white'}}>Buduran</Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', borderRadius: 16, width: '50%', backgroundColor: '#1cc62b'}}>
              <Image style={{width: 150, height: 100}} source={{uri: 'https://openweathermap.org/img/wn/02d@2x.png'}}/>
            </View>
          </View>
        </View>
      </View>
  );
}

export default Home;
