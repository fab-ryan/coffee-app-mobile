import Colors from '@constants/Colors';
import { View, Text } from './Themed';
import { StyleSheet, ImageBackground } from 'react-native';
import { Image } from './Image';

import placeholder from '../../assets/images/placeholder.png';
import backgroundCard from '../../assets/images/productBg.png';
import { Icon } from './Icon';
import { IconsEnum } from '@utils';
import { IconButton } from './Button';

interface Products {
  id: number;
  name: string;
  subType: string;
  price: number;
  image: string;
  ratings: string;
}

export const ProductCard = (props: Products) => {
  return (
    <>
      <View style={styles.card}>
        <ImageBackground
          source={backgroundCard}
          style={styles.gradient}
        >
          <View style={styles.overflowHidden}>
            <View style={styles.imageContainer}>
              <Image
                source={props.image ? props.image : placeholder}
                style={styles.image}
                placeholder={placeholder}
              />
              <View style={styles.ratingContainer}>
                <Icon
                  name='star'
                  color={Colors['dark'].tabIconSelected}
                  type={IconsEnum.fa}
                  size={20}
                />
                <Text
                  fontFamily='poppins-semi-bold'
                  style={styles.ratingText}
                >
                  {props.ratings}
                </Text>
              </View>
            </View>
            <Text
              style={styles.nameText}
              fontFamily='poppins-medium'
            >
              {props.name}
            </Text>
            <Text style={styles.subTitleText}>{props.subType}</Text>
            <View style={styles.priceContainer}>
              <View style={styles.priceTextContainer}>
                <Text
                  fontFamily='poppins-extra-bold'
                  style={styles.priceCurrency}
                >
                  $
                </Text>
                <Text
                  fontFamily='poppins-extra-bold'
                  style={styles.priceText}
                >
                  {props.price}
                </Text>
              </View>
              <IconButton
                name='plus'
                color={Colors['dark'].text}
                type={IconsEnum.fa}
                size={20}
                style={{
                  backgroundColor: Colors['dark'].tabIconSelected,
                  borderRadius: 10,
                  padding: 5,
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 1,
    elevation: 3,
    shadowColor: Colors['dark'].tint,
    height: 340,
    width: 245,
    borderRadius: 25,
    marginBottom: 20,
    marginRight: 20,
    overflow: 'hidden',
  },
  gradient: {
    height: '100%',
    width: '100%',
    borderRadius: 25,
    position: 'relative',
  },

  overflowHidden: {
    backgroundColor: 'transparent',
    zIndex: 2,
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  imageContainer: {
    width: '100%',
    height: 160,
    borderRadius: 25,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  ratingContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0,0, 0.4)',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 500,
    width: 90,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomRightRadius: -30,
  },
  ratingText: {
    color: Colors['dark'].text,
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  priceTextContainer: {
    textTransform: 'uppercase',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  priceCurrency: {
    fontWeight: '900',
    color: Colors['dark'].tabIconSelected,
    paddingRight: 5,
    fontSize: 28,
    gap: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors['dark'].text,
    marginVertical: 10,
  },
  subTitleText: {
    fontSize: 15,
    marginVertical: 5,
    fontWeight: '400',
    color: Colors['dark'].text,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors['dark'].text,
  },
});
