import { View, Text } from 'react-native';
import {styles} from './styles.js'


function Componente04(){
  return(
    <View style={styles.area}>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Projetos</Text>
      <Text>N/A</Text>
    </View>
  )
}



export default Componente04;