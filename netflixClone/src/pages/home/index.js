import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import {View, ScrollView, RefreshControl} from 'react-native';

import {Button, Title} from 'react-native-paper';
import styles from './style';

import Header from '../../components/header';
import Hero from '../../components/hero';
import ButtonVertical from '../../components/ButtonVertical';
import Previas from '../../components/Previas';
import Secao from '../../components/Secao';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [principal, setPrincipal] = useState({});
  const [secoes, setSecoes] = useState([]);

  const getHome = async () => {
    setRefreshing(true);
    try {
      const response = await api.get('home');
      const res = response.data;

      if (res.error) {
        alert(res.message);
        setRefreshing(false);
        return false;
      }

      setPrincipal(res.principal);
      setSecoes(res.secoes);
      setRefreshing(true);
    } catch (error) {
      setRefreshing(false);
      error.message;
    }
  };

  useEffect(() => {
    getHome();
  });

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getHome} />
      }>
      <Header />
      <Hero filmes={principal} />

      <View style={styles.menuHeader}>
        <ButtonVertical icon="plus" text="Minha Lista" />
        <Button icon="play" mode="contained" color="#FFF" uppercase={false}>
          Assistir
        </Button>
        <ButtonVertical icon="information-outline" text="Saiba Mais" />
      </View>

      <View style={styles.previaContainer}>
        <Title style={styles.previaTitle}>Prévias</Title>
        <Previas filmes={secoes[0]} />
      </View>

      {secoes.map((secao, index) => (
        <Secao secao={secao} key={index} />
      ))}
    </ScrollView>
  );
};

export default Home;
