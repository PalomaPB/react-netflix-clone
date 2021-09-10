import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

import styles from './style';

const Login = ({navigation}) => {
  const [credenciais, setCredenciais] = useState({
    email: '',
    senha: '',
  });

  return (
    <View style={styles.bgDark}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <View>
        <TextInput
          mode="flat"
          label="Email ou número de telefone"
          style={styles.marginBotton}
          value={credenciais.email}
          onChangeText={text => setCredenciais({...credenciais, email: text})}
        />

        <TextInput
          mode="flat"
          label="Senha"
          style={styles.marginBotton}
          secureTextEntry
          value={credenciais.senha}
          onChangeText={text => setCredenciais({...credenciais, senha: text})}
        />

        <Button
          style={styles.marginBotton}
          mode="contained"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Entrar
        </Button>

        <Button
          style={styles.marginBotton}
          onPress={() => console.log('Pressed')}>
          Recuperar Senha
        </Button>

        <Text style={styles.textSmall}>
          O acesso está protegido pelo Google reCAPTCHA para garantir que você
          não é um robo. Saiba Mais.
        </Text>
      </View>
    </View>
  );
};

export default Login;
