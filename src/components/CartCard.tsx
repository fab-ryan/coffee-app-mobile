import Colors from '@constants/Colors';
import { Text, View } from './Themed';
import { ImageBackground, StyleSheet } from 'react-native';
import backgroundCard from '@assets/images/productBg.png';
import { ICart } from '@utils';
import { Image } from './Image';

export const CartCart = (props: ICart) => {
  return (
    <View
      style={[
        styles.container,
        props.price.length > 1 ? styles.containerLarger : styles.containerSmall,
      ]}
    >
      <ImageBackground
        source={backgroundCard}
        style={styles.gradient}
      >
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={props.image}
              style={styles.image}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 1,
    elevation: 3,
    shadowColor: Colors['dark'].tint,
    width: '100%',
    borderRadius: 25,
    marginBottom: 20,
    marginRight: 20,
    overflow: 'hidden',
  },
  gradient: {
   
    borderRadius: 25,
    position: 'relative',
    objectFit:'cover'
  },
  cardContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },

  containerLarger: {
  },
  containerSmall: {
  },
});
