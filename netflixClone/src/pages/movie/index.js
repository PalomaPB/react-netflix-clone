import React, {useState} from 'react';
import styles from './style';
import {
  ScrollView,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import {Title, Button, Paragraph, Caption} from 'react-native-paper';

import ButtonVertical from '../../components/ButtonVertical';
import Secao from '../../components/Secao';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Episode from '../../components/Episode';
import {SinglePickerMaterialDialog} from 'react-native-material-dialog';

const Movie = () => {
  const [tipo] = useState('serie');
  const [visible, setVisible] = useState(false);
  const [temporada, setTemporada] = useState({value: 1, label: 'Temporada 1'});
  return (
    <>
      <SinglePickerMaterialDialog
        title={'Temporadas da Série'}
        items={[
          {value: 1, label: 'Temporada 1'},
          {value: 2, label: 'Temporada 2'},
          {value: 3, label: 'Temporada 3'},
          {value: 4, label: 'Temporada 4'},
        ]}
        visible={visible}
        selectedItem={temporada}
        onOk={result => {
          setVisible(false);
          setTemporada(result.selectedItem);
        }}
      />

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
            Sed ut porta velit. Maecenas eget tempus turpis. Fusce interdum
            mauris eu nibh sagittis iaculis. Nunc vel viverra felis. Maecenas ac
            pulvinar diam. Nulla facilisi.
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
          {tipo === 'serie' && (
            <>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.buttonTemporada}>
                <Text style={styles.temporadaName}>{temporada.label}</Text>
                <Icon name="chevron-down" color="#FFF" size={20} />
              </TouchableOpacity>

              <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({item, index}) => <Episode key={index} />}
              />
            </>
          )}
        </View>
        {tipo === 'filme' && <Secao hasTopBorder />}
      </ScrollView>
    </>
  );
};

export default Movie;
