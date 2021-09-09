import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flatListContainer: {
    width: '100%',
    height: 100,
    marginTop: 10,
    marginBottom: 50,
  },
  oval: {
    backgroundColor: '#E50914',
    padding: 2.5,
    width: 90,
    height: 90,
    borderRadius: 90,
  },
  capa: {
    height: 84,
    width: 84,
    borderRadius: 85,
  },
  logo: {
    width: 90,
    height: 45,
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    alignSelf: 'center',
  },
  gradient: {
    width: '100%',
    height: 60,
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
  },
});

export default styles;
