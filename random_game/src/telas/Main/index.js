  import React, { useState } from 'react';
  import { View, Text, Image } from 'react-native';

  import Botao from '../../componente/Botao/index';
  import Charada from '../../componente/Image/index'
  import { styles } from './styles';

  export default function Home() {
    const [resultado, setResultado] = useState('');
    const img = 'https://static.wikia.nocookie.net/batman/images/3/32/Charada.png/revision/latest/scale-to-width-down/265?cb=20150430140527&path-prefix=pt-br'
    

    const gerarN = () => {  
        const num = Math.floor(Math.random() * 11);
        setResultado(num)
    };

    return (
      <View style={styles.container}>
      
        <Text style={styles.titulo}>
          Jogo de N° Aleatório
        </Text>

        <Charada/>

        <Image style={styles.img}
          source={{ uri: img }}
        />

        <Text style={styles.texto}>
          Pense em um n° de 0 a 10
        </Text>
        
        <Botao title="Verificar" onPress={gerarN} />

        <Text style={styles.resultado}>
          {`Resultado: ${resultado}`}
        </Text>

      </View>
    );
  }