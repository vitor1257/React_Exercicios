import { View, Text } from 'react-native';
import {styles} from './styles.js'


function Componente01(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Dados Pessoais</Text>
      <Text>Tacithanos</Text>
    </View>
  )
}



export default Componente01;