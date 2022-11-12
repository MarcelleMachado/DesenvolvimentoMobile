import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Button, TouchableOpacity, TextInput, Image} from "react-native"
import { Gatinho } from './components/gatinho';
import { styles02 } from './Styles'


export default function App() {
  const [nome, setNome] = useState("")
  const [isTrue, setIsTrue] = useState(false)

  const handlePress = () => {
    // console.log("Pressionei")
    // alert("Pressionei")
    setIsTrue(!isTrue)
  }

  return(
    <View style={styles02.container}>
      <Text style={{fontSize: 40}}>Hello World!</Text>
      <Gatinho nome="Fubá"/>
      <Text>Não tem erança de estilo</Text>
      <Text style={styles.texto}>Estilo sem ser inline</Text>
      <Text style={styles02.texto02}>Importação de estilo</Text>
      <ScrollView style={styles02.scrollContainer}>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Text style={styles02.textoGiga}>Teste de scroll</Text>
        <Button title='Botão com estilo limitado' color='orange' />
        <TouchableOpacity onPress={() => handlePress()} style={styles02.botao}><Text style={styles.texto}>Botão mais usado, estilizável</Text></TouchableOpacity>
        <Image source={{uri: "https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg"}}
        style={{ width: 100, height: 100}} />
        <Image source={ require('../src/images/gato.webp')} style={{ width: 100, height: 100}}/>
        <Text style={styles.texto}>Input: {nome} </Text>
        <Text style={styles.texto}>{ isTrue ? "É Verdadeiro" : "É Falso"}</Text>
        <TextInput
          style={{backgroundColor: '#fff', marginTop: 20, width: '80%'}}
          placeholder='Digite o nome do gatinho'
          // keyboardType=''  Com essa opção podemos limitar o teclado do cel, em nums. por ex
          onChangeText={setNome}
          value={nome}>
        </TextInput>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    color: '#fff',
  }
})