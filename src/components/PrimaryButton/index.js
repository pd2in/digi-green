import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";

function PrimaryButton({text, onPress}) {
  return (
      <TouchableOpacity
          onPress={onPress}
          style={styles.wrapper}
      >
        <Text
            style={styles.text}
        >
          {text}
        </Text>
      </TouchableOpacity>
  );
}

export default PrimaryButton;

const styles = new StyleSheet.create({
  wrapper: {backgroundColor: '#08B117', borderRadius: 16},
  text: {color: 'white', textAlign: 'center', paddingVertical: 12.5, fontFamily: 'Poppins-Bold', fontSize: 16}
})
