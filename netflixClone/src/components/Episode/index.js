import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import styles from './style';

const Episode = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.capa}
          source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}
        />

        <View>
          <Title style={styles.episodeTitle}>1. Nome do Episódeo</Title>
          <Caption>45 min.</Caption>
        </View>
      </View>

      <Caption>
        Fusce viverra feugiat ex vitae semper. Quisque nec porttitor arcu. In
        fringilla, dolor quis rutrum gravida, nunc turpis molestie risus, sed
        faucibus enim elit in purus.{' '}
      </Caption>
    </TouchableOpacity>
  );
};

export default Episode;
