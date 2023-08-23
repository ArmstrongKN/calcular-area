import React,{useState} from 'react';
import { Text, SafeAreaView,View,TextInput,Button,TouchableOpacity, StyleSheet } 
from 'react-native';

export default function App() {
  const [numero1,setnumero1 ]=useState('');
const [numero2,setnumero2]=useState('');
  function Calculadora(){
  const resultado= numero1  * numero2
  alert('O resultado é :'+ resultado);
}
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
       Calculadora de área       
      </Text>   

      <TextInput 
      style={styles.input}
        placeholder="Digite numero 1: "
        placeholderTextColor='blue'
        keyboardType="numeric"
        onChangeText={(numero1)=>setnumero1(numero1)}
      />  

      <TextInput
      style={styles.input}
        placeholder="Digite o numero 2 :"
        placeholderTextColor='blue'
        keyboardType="numeric"
        onChangeText={(numero2)=>setnumero2(numero2)}
      />  

    <TouchableOpacity style={styles.btn} onPress={Calculadora}>
    <Text style={styles.textbtn}>Calcular</Text>
    </TouchableOpacity>
    

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:60
  },
  btn:{
    alignItems:'center',
    backgroundColor:'#FF0000',
    padding:15,
    borderRadius:10,
    margin:15,
    marginTop:50
  },
  textbtn:{
    fontSize:30,
    color:'#fff'
  },
  input:{
    fontSize:17,
    padding:20,
    backgroundColor:'#a0c225',
    borderRadius:10,
    margin:15,
    
  }
});
