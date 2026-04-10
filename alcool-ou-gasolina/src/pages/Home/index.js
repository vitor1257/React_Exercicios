import React, { useState } from 'react';
import { View, Text } from 'react-native';

import InputNumero from '../../componentes/Input/index';
import Botao from '../../componentes/Botao/index';
import { styles } from './styles';

export default function Home() {
  const [etanol, setEtanol] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    const conta = parseFloat(etanol) / parseFloat(gasolina);

    if (conta < 0.7) {
      setResultado('Álcool');
    } else {
      setResultado('Gasolina');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Álcool x Gasolina</Text>

      <InputNumero
        placeholder="Preço do Alcool"
        value={etanol}
        onChange={setEtanol}
      />

      <InputNumero
        placeholder="Preço da Gasolina"
        value={gasolina}
        onChange={setGasolina}
      />

      <Botao title="Verificar" onPress={calcular} />

      <Text style={styles.resultado}> Resultado: {resultado}</Text>

    </View>
  );
}