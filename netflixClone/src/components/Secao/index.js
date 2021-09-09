import React from 'react';
import {
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Title} from 'react-native-paper';
import styles from './style';

const Secao = ({hasTopBorder}) => {
  return (
    <View style={styles.container}>
      {hasTopBorder && <View style={styles.borderTop} />}
      <Title style={styles.secaoTitle}>Seção</Title>
      <FlatList
        style={styles.lista}
        horizontal
        data={[1, 2, 3, 4, 5]}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index}>
            <ImageBackground
              source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}
              style={[
                styles.capa,
                {marginRight: 10, marginLeft: index === 0 ? 20 : 0},
              ]}>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={{uri: 'https://i.imgur.com/4xN7wB8.png'}}
              />
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Secao;
