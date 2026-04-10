import { Button } from 'react-native';

export default function Botao({ title, onPress }) {
  return <Button title={title} onPress={onPress} />;
}