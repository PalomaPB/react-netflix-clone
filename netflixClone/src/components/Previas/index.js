import React from 'react';
import {FlatList, TouchableOpacity, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Previas = ({filmes}) => {
  return (
    <FlatList
      horizontal
      style={styles.flatListContainer}
      data={filmes}
      renderItem={({item, index}) => (
        <TouchableOpacity
          key={index}
          style={{marginLeft: index == 0 ? 20 : 0, marginRight: 10}}>
          <View style={styles.oval}>
            <Image source={{uri: item.capa}} style={styles.capa} />
            <Image
              resizeMode="contain"
              source={{uri: item.logoMobile ? item.logoMobile : item.logo}}
              style={styles.logo}
            />

            <LinearGradient
              style={styles.gradient}
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default Previas;
