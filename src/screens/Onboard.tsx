import { View, Text, Button, Image } from '@/components';
import { Animated, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '@assets/images/logo.png';
import { RootStackScreenProps, onBoardingData } from '@utils';
import { useRef } from 'react';

import { width } from '@constants';
import Colors from '@constants/Colors';
import { GettingCoffeeIcon, RelaxationIcon } from '@components/Icon';

type slideProps = {
  onNext?: () => void;
  onPrev?: () => void;
};

type SecondSlideProps = {
  onLogin: () => void;
  onSignup: () => void;
};

function FirstSlide({ onNext }: slideProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <GettingCoffeeIcon />
          <View style={styles.introTexts}>
            <Text style={styles.text}>{onBoardingData[0].title}</Text>
            <Text style={styles.textSmall}>
              {onBoardingData[1].description}
            </Text>
          </View>
        </View>
        <Button
          color='secondary'
          title='Next'
          onPress={onNext}
        />
      </View>
    </SafeAreaView>
  );
}

function SecondSlide({ onLogin, onSignup }: slideProps & SecondSlideProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        

        <View style={{ alignItems: 'center' }}>
          <RelaxationIcon />
          <View style={styles.introTexts}>
            <Text style={styles.text}>{onBoardingData[1].title}</Text>
            <Text style={styles.textSmall}>
              {onBoardingData[1].description}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            flexDirection: 'row',
          }}
        >
          <Button
            color={'secondary'}
            title='Login'
            style={{ marginRight: 20 }}
            onPress={onLogin}
          />
          <Button
            title='Sign up'
            onPress={onSignup}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function OnboardScreen({
  navigation,
}: RootStackScreenProps<'OnBoard'>) {
  const flatListRef = useRef<any>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const login = () => {
    navigation.replace('Login');
  };
  const signup = () => {
    navigation.replace('Register');
  };

  const onNext = () => {
    flatListRef?.current?.scrollToOffset({
      offset: 1 * width,
    });
  };

  return (
    <Animated.FlatList
      ref={flatListRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      data={[
        <FirstSlide
          key={1}
          onNext={onNext}
        />,
        <SecondSlide
          key={2}
          onLogin={login}
          onSignup={signup}
        />,
      ]}
      keyExtractor={(item, index) => `${index}`}
      renderItem={({ item }) => <View style={{ width: width }}>{item}</View>}
      pagingEnabled
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false },
      )}
    />
  );
}

const Logo = (): JSX.Element => {
  return (
    <Image
      source={logo}
      style={{ width: 100, height: 100 }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  introTexts: {
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors['dark'].text,
  },
  textSmall: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors['dark'].lightSecondaryColor,
  },
  textPrimary: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0177BB',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  waitingLine: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
