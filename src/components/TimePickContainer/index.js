import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

function TimePickContainer({ label, onPress, value, text }) {
  return (
    <View style={styles.timeFormContainer}>
      <Text style={styles.timeFormContainer.text}>{label}</Text>
      <TouchableOpacity style={styles.timeFormContainer} onPress={onPress}>
        <Text style={styles.timeFormContainer.time}>{value}</Text>
        <Text style={styles.timeFormContainer.button}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TimePickContainer;

const styles = StyleSheet.create({
  timeFormContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    text: {
      fontFamily: 'Poppins-Regular',
    },
    time: {
      fontFamily: 'Poppins-SemiBold',
      color: 'gray',
      marginRight: 12,
    },
    button: {
      fontFamily: 'Poppins-SemiBold',
      color: GlobalStyles.colors.primary,
    },
  },
});
