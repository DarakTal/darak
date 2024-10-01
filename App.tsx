import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Nome' style={styles.textInput} placeholderTextColor="#FFE4B5" />
      <TextInput placeholder='Endereço' style={styles.textInput} placeholderTextColor="#FFE4B5" />
      <TextInput placeholder='Telefone' style={styles.textInput} placeholderTextColor="#FFE4B5" />
      <TextInput placeholder='Email' style={styles.textInput} placeholderTextColor="#FFE4B5" />
      <TextInput placeholder='Mensagem' style={styles.textInput} placeholderTextColor="#FFE4B5" />
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text>Enviar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    backgroundColor: '#C8102E',
    width: '100%',
    maxWidth: 400,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  button: {
    backgroundColor: '#C8102E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: 300,
  },
});
