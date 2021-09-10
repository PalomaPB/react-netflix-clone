import React, {useState, useEffect} from 'react';
import {View, Image, Text, ActivityIndicator} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';

const Login = ({navigation}) => {
  //0 - carregando, 1 - logado, 2 - deslogado
  const [logged, setLogged] = useState(0);
  const [credenciais, setCredenciais] = useState({
    email: '',
    senha: '',
  });

  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@user');

    if (user) {
      setLogged(1);
      navigation.replace('Home');
    } else {
      setLogged(2);
    }
  };

  const login = async () => {
    try {
      const response = await api.post('/usuario/login', credenciais);
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }

      await AsyncStorage.setItem('@user', JSON.stringify(res.usuario));
      navigation.replace('Home');
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    checkLogin();
  });

  return (
    <View style={styles.bgDark}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      {logged === 0 && <ActivityIndicator color="#FFF" size="large" />}

      {logged === 2 && (
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
            onPress={
              () => login()
              //{navigation.navigate('Home');}
            }>
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
      )}
    </View>
  );
};

export default Login;
