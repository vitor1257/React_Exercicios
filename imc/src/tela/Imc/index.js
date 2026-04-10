  import React, { useState } from 'react';
  import { View, Text } from 'react-native';

  import InputNumero from '../../componente/Input/index';
  import Botao from '../../componente/Botao/index';
  import { styles } from './styles';

  export default function Home() {
    const [Peso, setPeso] = useState('');
    const [Altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    

    const calcularImc = () => {
      const imc =  parseFloat(Peso) / (parseFloat(Altura) * parseFloat(Altura))
      
     if (imc < 18.5) {
        setResultado('Abaixo do Peso');
      } else if (imc < 25) {
        setResultado('Peso Normal');
      } else if (imc < 30) {
        setResultado('Sobrepeso');
      } else if (imc < 35) {
        setResultado('Obesidade Grau I');
      } else if (imc < 40) {
      setResultado('Obesidade Grau II');
      } else {
        setResultado('Obesidade Grau III ou Mórbida');
      }

    };

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculadora de IMC</Text>

        <InputNumero
          placeholder="Digite seu Peso"
          value={Peso}
          onChange={setPeso}
        />

        <InputNumero
          placeholder="Digite sua Altura"
          value={Altura}
          onChange={setAltura}
        />

        <Botao title="Verificar" onPress={calcularImc} />

        <Text style={styles.resultado}> 
          Resultado: {resultado}
        </Text>

      </View>
    );
  }