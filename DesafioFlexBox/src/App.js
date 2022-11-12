import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.faixaCiano} />

      <View style={styles.container02}>
        <View style={styles.quadradoLaranja} />
        <View style={styles.retanguloLaranja} />
      </View>

      <View style={styles.container03}>
        <View style={styles.quadradoRoxo} />
        <View style={styles.quadradoAzul} />
      </View>

      <View style={styles.faixaCiano} />
      
      <View style={styles.container04}>
        <View style={styles.container05}>
          <View style={styles.quadradoLaranja02} />
          <View style={styles.quadradoLaranja02} />
          <View style={styles.quadradoLaranja02} />
          <View style={styles.quadradoLaranja02} />
          <View style={styles.quadradoLaranja02} />
          <View style={styles.quadradoLaranja02} />
        </View>
      </View>

      <View style={styles.quadradoAzul02} />

    </View>
  );
};

export default App;
