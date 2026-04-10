import React, { useState } from 'react';
import { View, Text } from 'react-native';

import InputNumero from '../../componentes/Input/index';
import Botao from '../../componentes/Botao/index';
import { styles } from './styles';

export default function Home() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const multiplicar = () => {
    const res = parseFloat(num1) * parseFloat(num2);
    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multiplicadora de Numeros</Text>

      <InputNumero
        placeholder="Digite o Primeiro número"
        value={num1}
        onChange={setNum1}
      />

      <InputNumero
        placeholder="Digite o Segundo número"
        value={num2}
        onChange={setNum2}
      />

      <Botao title="Calcular" onPress={multiplicar} />

      <Text style={styles.resultado}>
          Resultado: {resultado}
      </Text>
    </View>
  );
}