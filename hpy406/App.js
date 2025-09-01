import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Switch, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para o modo claro/escuro

  // Função para adicionar o número pressionado ao input
  const handlePress = (num) => {
    setInput(input + num);
  };

  // Função para calcular o resultado
  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Usando eval para calcular a expressão (cuidado com isso em produção)
    } catch (error) {
      setResult('Erro');
    }
  };

  // Função para limpar o input
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  // Alternar entre modo claro e escuro
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={styles.header}>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <Text style={[styles.title, isDarkMode && styles.darkText]}>Calculadora Simples</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, isDarkMode && styles.darkInput]}
          value={input}
          placeholder="Digite uma operação"
          editable={false}
        />
      </View>

      <Text style={[styles.result, isDarkMode && styles.darkText]}>Resultado: {result}</Text>

      {/* Linhas de botões */}
      <View style={styles.buttonContainer}>
        {['1', '2', '3', '+'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, isDarkMode && styles.darkButton]}
            onPress={() => handlePress(item)}
          >
            <Text style={[styles.buttonText, isDarkMode && styles.darkText]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {['4', '5', '6', '-'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, isDarkMode && styles.darkButton]}
            onPress={() => handlePress(item)}
          >
            <Text style={[styles.buttonText, isDarkMode && styles.darkText]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {['7', '8', '9', '*'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, isDarkMode && styles.darkButton]}
            onPress={() => handlePress(item)}
          >
            <Text style={[styles.buttonText, isDarkMode && styles.darkText]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {['0', 'C', '=', '/'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, isDarkMode && styles.darkButton]}
            onPress={item === 'C' ? handleClear : item === '=' ? handleCalculate : () => handlePress(item)}
          >
            <Text style={[styles.buttonText, isDarkMode && styles.darkText]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#121212', // Fundo escuro
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1, // Para garantir que o switch fique sobre o conteúdo
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center', // Centraliza o título
  },
  darkText: {
    color: '#fff',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    fontSize: 32,
    height: 50,
    width: '80%',
    textAlign: 'right',
    borderBottomWidth: 2,
    paddingRight: 10,
  },
  darkInput: {
    color: '#fff',
    borderBottomColor: '#fff',
  },
  result: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    width: '100%',
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f0f0f0', // Cor de fundo dos botões
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  darkButton: {
    backgroundColor: '#333', // Cor de fundo no modo escuro
  },
  buttonText: {
    fontSize: 24,
    color: '#333', // Cor do texto
  },
  darkButtonText: {
    color: '#fff', // Cor do texto no modo escuro
  },
});
