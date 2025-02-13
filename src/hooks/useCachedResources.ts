import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          ...FontAwesome.font,
          ...Feather.font,
          ...MaterialCommunityIcons.font,
          ...Ionicons.font,
          ...AntDesign.font,
          ...Entypo.font,
          poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
          "poppins-bold": require('../../assets/fonts/Poppins-Bold.ttf'),
          'poppins-medium': require('../../assets/fonts/Poppins-Medium.ttf'),
          'poppins-semi-bold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
          'poppins-light': require('../../assets/fonts/Poppins-Light.ttf'),
          'poppins-thin': require('../../assets/fonts/Poppins-Thin.ttf'),
          'poppins-extra-bold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setTimeout(() => {
          setLoadingComplete(true);
          SplashScreen.hideAsync();
        }, 1000)
      }
    }

    loadResourcesAndDataAsync();
  }, [isLoadingComplete]);

  return isLoadingComplete;
}
