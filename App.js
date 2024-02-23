import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground,} from 'react-native';

export default function App() {
return (
<View style={styles.container}>

<ImageBackground
  source={{ uri: 'https://img.freepik.com/vetores-gratis/abstrato-branco-em-estilo-de-papel-3d_23-2148400085.jpg?w=996&t=st=1708707074~exp=1708707674~hmac=23184ae2c3f5840f486c8090e981dadd3e63f55f8fc11c7b0cbc3bbd105d72dc'}}
/>
 
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
    securyTextEntry={false}
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

backgroundImage: {
  resizeMode: 'cover',
},
})