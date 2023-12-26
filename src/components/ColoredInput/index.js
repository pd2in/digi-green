import { StyleSheet, Text, TextInput, View } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

function ColoredInput({
  label,
  keyboardType,
  placeholder,
  value,
  onChangeText,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default ColoredInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
    color: GlobalStyles.colors.primary,
  },
  input: {
    backgroundColor: GlobalStyles.colors.inversePrimary,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 16,
  },
});
