import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {HydroponicConfigContext} from "../../config/Context";
import {PrimaryButton, Separator, TimePickContainer} from "../../components";
import getFormattedDate from "../../utils/date";
import getFormattedTime from "../../utils/time";

function Index({navigation, route}) {

    const hydroponicConfigContext = useContext(HydroponicConfigContext);
    const fertilizationSchedule = route.params.schedule;
    const [shedule, setSchedule] = useState({
        numberOfDays: fertilizationSchedule.numberOfDays,
        startDate: fertilizationSchedule.startDate,
        fertilizationTime: fertilizationSchedule.fertilizationTime,
    })

    const [selectedTimeProperty, setSelectedTimeProperty] = useState('startTime');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    return (
        <View style={styles.mainWrapper}>
            <Text style={styles.text}>
                Atur pemberian pupuk cair secara otomatis
            </Text>
            <Separator height={24}/>

            <TimePickContainer
                label={"Tanggal pemupukan"}
                onPress={console.log("ini ditekan")}
                value={getFormattedDate(shedule.startDate)}
                text={"Pilih Hari"}
            />

            <Separator height={12}/>

            <TimePickContainer
                label={"Waktu pemupukan"}
                onPress={console.log("ini ditekan")}
                value={getFormattedTime(shedule.fertilizationTime)}
                text={"Pilih Jam"}
            />

            <Separator height={24}/>
            <PrimaryButton text={"Update"}/>
        </View>
    );
}

export default Index;

const styles = StyleSheet.create({
    mainWrapper: {
        padding: 24,
    },
    text: {
        fontFamily: "Poppins-Medium",
    }
})