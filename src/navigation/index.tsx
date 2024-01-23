import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Colors from '@constants/Colors';
import useColorScheme from '@hooks/useColorScheme';
import { RootStackParamList, RootTabParamList } from '@utils';

// Screens for all modules
import HomeScreen from '@screens/Home';
import LoginScreen from '@screens/Login';
import RegisterScreen from '@screens/SignUp';
import NotFoundScreen from '@screens/NotFound';

import {
  Icon,
  HomeIcon,
  CartIcon,
  HeartIcon,
  RingIcon,
} from '@components/Icon';
import { IconsEnum } from '@utils';
import { useAuth, useSelector } from '@hooks';
import { useEffect, useState } from 'react';
import ModalScreen from '@screens/Modal';
import OnboardScreen from '@screens/Onboard';
import CartScreen from '@screens/Cart';
import FavoriteScreen from '@screens/Favorite';
import HistoryScreen from '@screens/History';

export default function Navigation({
  colorScheme,
  firstTime,
}: {
  colorScheme: ColorSchemeName;
  firstTime: boolean;
}) {
  const { dark, light } = Colors;
  const customDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: dark.background,
      card: dark.background,
      border: '#0177BB',
      primary: dark.tint,
      text: dark.text,
    },
  };

  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: light.background,
      card: light.background,
      border: '#0177BB',
      primary: light.tint,
      text: light.text,
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={colorScheme === 'dark' ? customDarkTheme : lightTheme}
        onReady={() => {
          console.log('ready');
        }}
      >
        <RootNavigator firstTime={firstTime} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({ firstTime }: { firstTime: boolean }) {
  const { authenticated, data } = useAuth();
  const [done, setDone] = useState(false);

  const {
    token: { access_token },
  } = useSelector((state) => state.authUser);

  useEffect(() => {
    setDone(true);
  }, [authenticated, data]);

  if (done) {
    return (
      <Stack.Navigator initialRouteName={!firstTime ? 'Login' : 'OnBoard'}>
        {authenticated ? (
          <>
            <Stack.Screen
              name='Root'
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name='Login'
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Register'
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='OnBoard'
              component={OnboardScreen}
              options={{ headerShown: false }}
            />
          </>
        )}

        <Stack.Screen
          name='NotFound'
          component={NotFoundScreen}
          options={{ title: 'Oops!' }}
        />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name='Modal'
            component={ModalScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    );
  } else {
    return null;
  }
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left']}
      style={{ flex: 1 }}
    >
      <BottomTab.Navigator
        initialRouteName='Home'
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
          tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
          tabBarStyle: {
            height: 50,
            paddingBottom: 5,
            paddingTop: 15,
          },
        }}
      >
        <BottomTab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Home',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <HomeIcon
                color={color}
                size={size}
              />
            ),
            headerShown: false,
          }}
        />

        <BottomTab.Screen
          name='Cart'
          component={CartScreen}
          options={{
            title: 'Cart',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <CartIcon
                color={color}
                size={size}
              />
            ),
            headerShown: false,
          }}
        />

        <BottomTab.Screen
          name='Favorite'
          component={FavoriteScreen}
          options={{
            title: 'Favorite',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <HeartIcon
                color={color}
                size={size}
              />
            ),
            headerShown: false,
          }}
        />

        <BottomTab.Screen
          name='History'
          component={HistoryScreen}
          options={{
            title: 'History',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <RingIcon
                color={color}
                size={size}
              />
            ),
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
}
