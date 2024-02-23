import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground,} from 'react-native';

export default function App() {
  const fundo = { uri: '' };
  

return (
<View style={styles.container}>



<Image
        style={styles.image}
        source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p3/16131462-icone-de-login-em-estilo-simples-ilustracaoial-de-acesso-seguro-de-pessoas-em-fundo-branco-isolado-conceito-de-negocio-aprovado-por-senha-vetor.jpg' }}
      />

<Text style={{ color: 'black', textAlign:'center', fontSize: 30 }}>E-mail E Senha</Text>

    <TextInput
    placeholder='Digite Seu E-mail'
    inputMode={'text'}
    style={styles.email}
    />

    <TextInput
    placeholder='Digite Sua Senha'
    inputMode={'text'}
    style={styles.senha}
    secureTextEntry={true}
    />

    <Button
     title='Efetuar Login'
     onPress={() => {
       alert('Login Efetuado');
     }}
     color='red'
     
    />

     
</View>

);
}



const styles = StyleSheet.create({

container: {
justifyContent: 'center',
flex: 1,
alignItems: 'center',
},

 email: {
  textAlign:'center',
  color: 'black',
  fontSize: 30,
  borderStyle:'solid',
  

 },

 senha: {
  textAlign:'center',
  color: 'black',
  fontSize: 30,
  borderStyle:'solid',
  
 },

 image: {
  width: 200,
  height: 200,
},


imagemfundo: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
},
})