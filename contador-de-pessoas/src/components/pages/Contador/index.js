import { View, Text } from 'react-native'
import {style} from './style'
import Botao from '../../Botao/index'
import {useState} from 'react'

function Contador(){
  const [count, setCount] = useState(0)

  function addCliente(){
    setCount(count + 1)
  }

  function decCliente(){
    if(count > 0)
      setCount(count - 1)
  }

  function zerar(){
    setCount(0)
  }

  return(
    <View>
    <Text style={style.titulo}>Contador de Clientes</Text>

    <Text style={style.contador}>{count}</Text>

    <Botao titulo='Incrementar' cor='green' funcao={addCliente}/>
    <Botao titulo='Incrementar' cor='red' funcao={decCliente}/>
    <Botao titulo='Zerar/Reset' cor='black' funcao={zerar}/>

    </View>
  )
}

export default Contador