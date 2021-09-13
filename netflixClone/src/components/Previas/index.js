import React from 'react';
import {FlatList, TouchableOpacity, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const Previas = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.flatListContainer}
      data={[1, 2, 3, 4, 5, 6, 7]}
      renderItem={({item, index}) => (
        <TouchableOpacity
          key={index}
          style={{marginLeft: index == 0 ? 20 : 0, marginRight: 10}}>
          <View style={styles.oval}>
            <Image
              source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}
              style={styles.capa}
            />
            <Image
              resizeMode="contain"
              source={{uri: 'https://i.imgur.com/4xN7wB8.png'}}
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
