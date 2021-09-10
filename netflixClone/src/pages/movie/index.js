import React, {useState, useEffect} from 'react';
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
import api from '../../services/api';
import ButtonVertical from '../../components/ButtonVertical';
import Secao from '../../components/Secao';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Episode from '../../components/Episode';
import {SinglePickerMaterialDialog} from 'react-native-material-dialog';

const Movie = ({route, navigation}) => {
  const [visible, setVisible] = useState(false);
  const [temporada, setTemporada] = useState({
    value: filmes?.temporadas[0]?.id,
    label: filmes?.temporadas[0]?.titulo,
  });
  const {filmes, secao} = route.params;
  const [episodeos, setEpisodeos] = useState([]);

  const getEpisodeos = async temporada_id => {
    try {
      const response = await api.get(`/episodeo/temporada/${temporada_id}`);
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }

      setEpisodeos(res.episodeos);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (filmes.tipo === 'serie') {
      getEpisodeos(temporada.value);
    }
  });

  return (
    <>
      <SinglePickerMaterialDialog
        title={`${filmes.titulo} - Temporada`}
        items={[
          filmes.temporada.map(temporada => ({
            value: temporada.id,
            label: temporada.titulo,
          })),
        ]}
        onCancel={() => {
          setVisible(false);
        }}
        visible={visible}
        selectedItem={temporada}
        onOk={result => {
          getEpisodeos(result.selectedItem.value);
          setVisible(false);
          setTemporada(result.selectedItem);
        }}
      />

      <ScrollView style={styles.container}>
        <ImageBackground style={styles.hero} source={{uri: filmes.capa}}>
          <TouchableOpacity
            style={styles.buttonBack}
            onPress={() => {
              navigation.goBack;
            }}>
            <Icon name="arrow-left" color="#FFF" size={25} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.containerPadding}>
          <Title>{filmes.titulu}</Title>

          <Button
            style={styles.buttonPlay}
            icon="play"
            mode="contained"
            color="#FFF"
            uppercase={false}>
            Assistir
          </Button>

          <Paragraph>{filmes.descricao}</Paragraph>

          <Caption style={styles.captionInfo}>
            Elenco:{' '}
            <Caption style={styles.captionWhite}>
              {filmes.elenco.join(', ')}
            </Caption>{' '}
            Gênero:{' '}
            <Caption style={styles.captionWhite}>
              {filmes.generos.join(', ')}
            </Caption>
            Cenas e Momentos:{' '}
            <Caption style={styles.captionWhite}>
              {filmes.cenas_momentos.join(', ')}
            </Caption>
          </Caption>

          <View style={styles.menu}>
            <ButtonVertical icon="plus" text="Minha Lista" />
            <ButtonVertical icon="thumb-up" text="Classifique" />
            <ButtonVertical icon="send" text="Compartilhe" />
            <ButtonVertical icon="download" text="Baixar" />
          </View>

          {filmes.tipo === 'serie' && (
            <>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.buttonTemporada}>
                <Text style={styles.temporadaName}>{temporada.label}</Text>
                <Icon name="chevron-down" color="#FFF" size={20} />
              </TouchableOpacity>

              <FlatList
                data={episodeos}
                renderItem={({item, index}) => (
                  <Episode episodeo={item} key={index} />
                )}
              />
            </>
          )}
        </View>
        {filmes.tipo === 'filme' && <Secao secao={secao} hasTopBorder />}
      </ScrollView>
    </>
  );
};

export default Movie;
