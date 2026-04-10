import { View, Text } from 'react-native';
import {styles} from './styles.js'


function Componente02(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Formação</Text>
      <Text>Sistemas para Internet</Text>
    </View>
  )
}



export default Componente02;