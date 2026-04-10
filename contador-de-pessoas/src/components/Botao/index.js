import { View, Button } from 'react-native'
import {style} from './style'

function Botao (props){
  return(
    <View style={style.contorno}>
      <Button title={props.titulo} color={props.cor} onPress={props.funcao}/>
    </View>
  )
}

export default Botao