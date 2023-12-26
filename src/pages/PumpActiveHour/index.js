import { StyleSheet, Text, View } from 'react-native';

function PumpActiveHour({ navigation, route }) {
  const { startTime, endTime } = route.params.range;

  console.log(startTime);
  console.log(endTime);

  return (
    <View style={styles.screenContainer}>
      <Text></Text>
    </View>
  );
}

export default PumpActiveHour;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
  },
});
