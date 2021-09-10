import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import styles from './style';

const Episode = ({episodeo}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.capa} source={{uri: episodeo.capa}} />

        <View>
          <Title style={styles.episodeTitle}>
            {episodeo.numero}. {episodeo.titulo}
          </Title>
          <Caption>45 min.</Caption>
        </View>
      </View>

      <Caption>{episodeo.descricao}</Caption>
    </TouchableOpacity>
  );
};

export default Episode;
