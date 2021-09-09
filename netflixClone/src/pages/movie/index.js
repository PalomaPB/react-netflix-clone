import React from 'react';
import styles from './style';
import {ScrollView, ImageBackground, View} from 'react-native';
import {Title, Button, Paragraph, Caption} from 'react-native-paper';
import ButtonVertical from '../../components/ButtonVertical';
import Secao from '../../components/Secao';

const Movie = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.hero}
        source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}
      />
      <View style={styles.containerPadding}>
        <Title>Nome do Filme</Title>
        <Button
          style={styles.buttonPlay}
          icon="play"
          mode="contained"
          color="#FFF"
          uppercase={false}>
          Assistir
        </Button>
        <Paragraph>
          Sed ut porta velit. Maecenas eget tempus turpis. Fusce interdum mauris
          eu nibh sagittis iaculis. Nunc vel viverra felis. Maecenas ac pulvinar
          diam. Nulla facilisi.
        </Paragraph>
        <Caption style={styles.captionInfo}>
          Elenco:{' '}
          <Caption style={styles.captionWhite}>
            Tom Holland, Michael Keaton, Jon Favreau, Gwyneth Paltrow
          </Caption>{' '}
          Gênero:{' '}
          <Caption style={styles.captionWhite}>
            Ação, Aventura, Fantasia, Comédia, Ficção Scientifica
          </Caption>
        </Caption>
        <View style={styles.menu}>
          <ButtonVertical icon="plus" text="Minha Lista" />
          <ButtonVertical icon="thumb-up" text="Classifique" />
          <ButtonVertical icon="send" text="Compartilhe" />
          <ButtonVertical icon="download" text="Baixar" />
        </View>
      </View>
      <Secao hasTopBorder />
    </ScrollView>
  );
};

export default Movie;
