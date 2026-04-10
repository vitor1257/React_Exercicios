import { View, Image } from 'react-native';
import { styles } from './styles';
import fotin from '../../assets/fotin.png';

function Componente05() {
  return (
    <View style={styles.container}>
      <Image source={fotin} style={styles.imagem} />
    </View>
  );
}

export default Componente05;