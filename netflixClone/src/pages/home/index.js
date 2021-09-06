import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Header from '../../components/header';
import Hero from '../../components/hero';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Hero />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
