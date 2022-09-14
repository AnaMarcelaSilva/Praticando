import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';

export default function App (){
  return (
    <View style={styles.container}>
    <View style={styles.logo}>
      <Image source={require('./assets/logo.PNG')}
      style={{width:162, height:156}}/>
    </View>

      <ImageBackground source={require('./assets/background.png')} style={styles.fundo}>

<View style={styles.buttonContainer}>

  <TouchableOpacity style={styles.buttons}>
  <Image source={require('./assets/icone_cardapio.png')} styles={{width:32, height:27}}/>
  <Text style={{fontSize:8}}>Cardápio</Text>
</TouchableOpacity>

  <TouchableOpacity style={styles.buttons}>
  <Image source={require('./assets/icone_ganhe.png')} styles={{width:32, height:27}}/>
  <Text style={{fontSize:8}}>Junte e Ganhe!</Text>
</TouchableOpacity>

  <TouchableOpacity style={styles.buttons}>
  <Image source={require('./assets/icone_pedidos.png')} styles={{width:32, height:27}}/>
  <Text style={{fontSize:8}}>Meus Pedidos</Text>
</TouchableOpacity>
</View>

<View style={styles.buttonContainer}>

<TouchableOpacity style={styles.buttons}>
  <Image source={require('./assets/icone_conta.png')} styles={{width:32, height:27}}/>
  <Text style={{fontSize:8}}>Minha conta</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttons}>
  <Image source={require('./assets/icone_informacoes.png')} styles={{width:32, height:27}}/>
  <Text style={{fontSize:8}}>Informações</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.buttons}>
  <Image source={require('./assets/icone_compartilhe1.png')} styles={{width:32, height:27}}/>
  <Text style={{fontSize:8}}>Compartilhar</Text>
</TouchableOpacity>
</View>

</ImageBackground>
</View>
  );
}

const styles = StyleSheet.create ({

container: {
  flex: 1,
  backgroundColor: '#1a1a1a',
},

fundo:{
  flexDirection:'column',
  resizeMode: "cover",
},

logo: {
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 60,
},

buttonContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: 10,
},
buttons:{
  height: 100,
  width: 100,
  backgroundColor: 'white',
  borderRadius: 40,
  padding: 2,
  justifyContent: 'center',
  alignItems: 'center',
}
});
