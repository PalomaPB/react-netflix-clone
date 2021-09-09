import React from 'react';
import {View, ScrollView} from 'react-native';

import {Button, Title} from 'react-native-paper';
import styles from './style';

import Header from '../../components/header';
import Hero from '../../components/hero';
import ButtonVertical from '../../components/ButtonVertical';
import Previas from '../../components/Previas';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Hero />

      <View style={styles.menuHeader}>
        <ButtonVertical icon="plus" text="Minha Lista" />
        <Button icon="play" mode="contained" color="#FFF" uppercase={false}>
          Assistir
        </Button>
        <ButtonVertical icon="information-outline" text="Saiba Mais" />
      </View>

      <View style={styles.previaContainer}>
        <Title style={styles.previaTitle}>Prévias</Title>
        <Previas />
      </View>
    </ScrollView>
  );
};

export default Home;
