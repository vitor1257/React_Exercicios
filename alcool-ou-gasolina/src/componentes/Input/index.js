import { TextInput } from 'react-native';
import { styles } from './styles';

export default function InputNumero({ value, onChange, placeholder }) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
    />
  );
}