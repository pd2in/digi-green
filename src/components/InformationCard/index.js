import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GeneralInfoComponent = () => {
  return (
    <View>
      <Text style={styles.infoTitle}>Informasi Umum</Text>
      <View style={styles.infoContainer}>
        <InfoBox title="Temperatur" />
        <InfoBox title="Humidity" />
        <InfoBox title="Fertilization Capacity" />
      </View>
    </View>
  );
};

const InfoBox = ({ title }) => {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'center',
    marginTop: 10,
  },
  infoBox: {
    width: 84,
    height: 84,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DEDEDE',
  },
  infoText: {
    textAlign: 'center',
    
  },
});

export default GeneralInfoComponent;
