import React, {useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {ChevronRightIcon, DoorOutIcon, PinPointIcon} from "../../assets/svgs";
import {Separator} from "../../components";

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
      <View onLayout={onLayoutRootView} style={{flex: 1,backgroundColor: 'white'}}>
        <StatusBar />
        <ScrollView style={{marginTop: insets.top, paddingHorizontal: 24, paddingBottom: 30}}>
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
            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 10, backgroundColor: 'white'}}>
              <DoorOutIcon />
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#08B117', borderRadius: 16, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
            <View style={{paddingLeft: 20, paddingVertical: 10, width: '50%'}}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18, color: 'white'}}>Cuaca hari ini</Text>
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
          <View style={{marginTop: 25}}>
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>Informasi Umum</Text>
            <View style={{flexDirection: 'row', gap: 15, justifyContent: 'center', marginTop: 10}}>
              <View style={{width: 84, height: 84, alignContent: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 16, borderWidth: 1, borderColor: '#DEDEDE'}}>
                <Text style={{textAlign: 'center'}}>Temperatur</Text>
              </View>
              <View style={{width: 84, height: 84, alignContent: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 16, borderWidth: 1, borderColor: '#DEDEDE'}}>
                <Text style={{textAlign: 'center'}}>Humidity</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>Sistem Kontrol</Text>
            <View style={{flexDirection: 'row', gap: 15, justifyContent: 'center', marginTop: 10}}>
              <View style={{width: 84, height: 84, alignContent: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 16, borderWidth: 1, borderColor: '#DEDEDE'}}>
                <Text style={{textAlign: 'center'}}>Temperatur</Text>
              </View>
              <View style={{width: 84, height: 84, alignContent: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 16, borderWidth: 1, borderColor: '#DEDEDE'}}>
                <Text style={{textAlign: 'center'}}>Humidity</Text>
              </View>
              <View style={{width: 84, height: 84, alignContent: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 16, borderWidth: 1, borderColor: '#DEDEDE'}}>
                <Text style={{textAlign: 'center'}}>PPH</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>Pengaturan Hidroponik</Text>
            <View style={{gap: 15, marginTop: 10}}>
              <TouchableOpacity style={{borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#DEDEDE', padding: 5, paddingHorizontal: 10}}>
                <View>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>Minimum dan Maksimum PPM</Text>
                  <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1cc62b'}}>Min : 20 , Max : 90</Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#DEDEDE', padding: 5, paddingHorizontal: 10}}>
                <View>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>Status Pompa</Text>
                  <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1cc62b'}}>Mati</Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#DEDEDE', padding: 5, paddingHorizontal: 10}}>
                <View>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>Jam Hidup Pompa</Text>
                  <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1cc62b'}}>8:00 - 21:00</Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
              <TouchableOpacity style={{borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#DEDEDE', padding: 5, paddingHorizontal: 10}}>
                <View>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>Pemberian Pupuk Cair</Text>
                  <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1cc62b'}}>Setiap hari Selasa, pukul 6:00</Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
            </View>
          </View>
          <Separator height={30}/>
        </ScrollView>
      </View>
  );
}

export default Home;
