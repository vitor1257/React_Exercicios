import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  titulo:{
    fontSize:30,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
  },
  container:{
    flex: 1,
  },
  box:{
    backgroundColor: '#F0F0F0',
    height: 250,
    width: 230,
    borderRadius: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
  },
  imagem:{
    margin: 5,
    width: 150,
    height: 150,
    alignSelf: 'center',
    
  },
  texto:{
    textAlign: 'center',
  }
})