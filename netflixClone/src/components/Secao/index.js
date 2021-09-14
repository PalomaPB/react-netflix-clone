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

const Secao = ({secao, hasTopBorder}) => {
  return (
    <View style={styles.container}>
      {hasTopBorder && <View style={styles.borderTop} />}
      <Title style={styles.secaoTitle}>Seção</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.lista}
        horizontal
        data={secao}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index}>
            <ImageBackground
              source={{uri: item.capa}}
              style={[
                styles.capa,
                {marginRight: 10, marginLeft: index === 0 ? 20 : 0},
              ]}>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={{uri: item.logoMobile ? item.logoMobile : item.logo}}
              />
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Secao;
