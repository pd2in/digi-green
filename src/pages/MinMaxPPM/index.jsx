import { Alert, StyleSheet, Text, View } from 'react-native';
import ColoredInput from '../../components/ColoredInput';
import { PrimaryButton, Separator } from '../../components';
import { useState } from 'react';

function MinMaxPPM({ navigation, route }) {
  const PPM = route.params.PPM;
  const [valuePPM, setValuePPM] = useState({
    minimum: PPM.minimum,
    maximum: PPM.maximum,
  });

  function changeMinMaxPPMHandler(key, text) {
    setValuePPM((prevValue) => ({
      ...prevValue,
      [key]: text,
    }));
  }

  function submitMinMaxPPMHandler() {
    const isPPMValid =
      valuePPM.minimum > 0 &&
      valuePPM.minimum <= 100 &&
      valuePPM.maximum > 0 &&
      valuePPM.maximum <= 100;

    if (!isPPMValid) {
      Alert.alert(
        'Nilai PPM Tidak Valid',
        'Harap masukkan nilai PPM antara 1 dan 100'
      );
      return;
    }
    navigation.goBack();
  }

  return (
    <View style={styles.screenContainer}>
      <ColoredInput
        label="Minimum PPM"
        keyboardType="decimal-pad"
        placeholder="Masukkan batas minimum PPM"
        value={valuePPM.minimum.toString()}
        onChangeText={(text) => changeMinMaxPPMHandler('minimum', text)}
      />
      <ColoredInput
        label="Maksimum PPM"
        keyboardType="decimal-pad"
        placeholder="Masukkan batas maksimum PPM"
        value={valuePPM.maximum.toString()}
        onChangeText={(text) => changeMinMaxPPMHandler('maximum', text)}
      />
      <Separator height={16}></Separator>
      <PrimaryButton text="Update" onPress={submitMinMaxPPMHandler} />
    </View>
  );
}

export default MinMaxPPM;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
  },
});
