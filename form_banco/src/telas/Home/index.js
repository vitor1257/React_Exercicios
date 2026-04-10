import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

export default function Home() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);
  const [resultado, setResultado] = useState('');

  const confirmar = () => {
    setResultado(
      `Nome: ${nome}\n` +
      `Idade: ${idade}\n` +
      `Sexo: ${sexo}\n` +
      `Escolaridade: ${escolaridade}\n` +
      `Limite: R$ ${limite.toFixed(2)}\n` +
      `Brasileiro: ${brasileiro ? 'Sim' : 'Não'}`
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.titulo}>Abertura de Conta</Text>

        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
        />

        <Text>Idade:</Text>
        <TextInput
          style={styles.input}
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
          placeholder="Digite sua idade"
        />

        <View style={styles.contPicker}>
          <Text>Sexo:</Text>
          <Picker
            selectedValue={sexo}
            onValueChange={(itemValue) => setSexo(itemValue)}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="Feminino" value="Feminino" />
          </Picker>
        </View>

        <View style={styles.contPicker}>
          <Text>Escolaridade:</Text>
          <Picker
            selectedValue={escolaridade}
            onValueChange={(itemValue) => setEscolaridade(itemValue)}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Fundamental" value="Fundamental" />
            <Picker.Item label="Médio" value="Médio" />
            <Picker.Item label="Superior" value="Superior" />
          </Picker>
        </View>
      
        <Text>Limite: R$ {limite.toFixed(0)}</Text>
        <Slider
          minimumValue={0}
          maximumValue={10000}
          value={limite}
          onValueChange={(value) => setLimite(value)}
        />

        <View style={styles.switchContainer}>
          <Text>Brasileiro:</Text>
          <Switch
            value={brasileiro}
            onValueChange={setBrasileiro}
          />
        </View>

        <Button title="Confirmar" onPress={confirmar} />

        {resultado !== '' && (
          <Text style={styles.resultado}>{resultado}</Text>
        )}

      </View>
    </ScrollView>
  );
}