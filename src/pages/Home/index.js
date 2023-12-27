import React, {useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {useFonts} from "expo-font";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {ChevronRightIcon, DoorOutIcon, PinPointIcon} from "../../assets/svgs";
import {Separator} from "../../components";
import config from '../../store/config';
import getFormattedTime from '../../utils/time';

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

  const { date, month, year } = config.fertilizationSchedule.startDate;

// Creating a Date object
  const startDateObject = new Date(`${month} ${date}, ${year}`);

// Formatting the date (e.g., "December 16, 2023")
  const formattedStartDate = startDateObject.toLocaleDateString("id-ID", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  console.log(formattedStartDate);

  return (
      <View onLayout={onLayoutRootView} style={{flex: 1,backgroundColor: 'white', paddingTop: 20,}}>
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
            <View style={{justifyContent: 'center', borderRadius: 16, width: '45  %', backgroundColor: '#C7F9CC', alignItems: "center"}}>
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
                <Text style={{textAlign: 'center'}}>PPM</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>Pengaturan Hidroponik</Text>
            <View style={{gap: 15, marginTop: 10}}>
              <TouchableOpacity onPress={() => {navigation.navigate("MinMaxPPM", {"PPM": config.PPM})}} style={{borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#DEDEDE', padding: 5, paddingHorizontal: 10 }}>
                <View>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>Minimum dan Maksimum PPM</Text>
                  <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1cc62b'}}>Min : {config.PPM.minimum.toString()} , Max : {config.PPM.maximum.toString()}</Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate("PumpStatus", {"status": config.pumpStatus})}} style={{borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#DEDEDE', padding: 5, paddingHorizontal: 10}}>
                <View>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>Status Pompa</Text>
                  <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1cc62b'}}>{config.pumpStatus ? "NYALA" : "MATI"}</Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate("PumpActiveHour", {"range" : config.pumpActiveRangeHour})}} style={{borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#DEDEDE', padding: 5, paddingHorizontal: 10}}>
                <View>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>Jam Hidup Pompa</Text>
                  <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1cc62b'}}>{getFormattedTime(config.pumpActiveRangeHour.startTime)} - {getFormattedTime(config.pumpActiveRangeHour.endTime)}</Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{navigation.navigate("FertilizationSchedule", {"schedule" : config.fertilizationSchedule})}} style={{borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#DEDEDE', padding: 5, paddingHorizontal: 10}}>
                <View>
                  <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>Pemberian Pupuk Cair</Text>
                  <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#1cc62b'}}>{formattedStartDate}, pukul 6:00</Text>
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
