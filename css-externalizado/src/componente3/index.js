import { View, Text } from 'react-native';
import {styles} from './styles.js'


function Componente03(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Experiencia</Text>
      <Text>3 Anos de Mine</Text>
    </View>
  )
}



export default Componente03;