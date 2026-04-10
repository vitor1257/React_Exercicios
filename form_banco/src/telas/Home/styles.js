import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'red',
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  resultado: {
    marginTop: 20,
    fontSize: 16,
  },

  contPicker: {
    paddingBottom: 10,
  }
});