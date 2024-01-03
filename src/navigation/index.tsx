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

import { Icon } from '@components/Icon';
import { IconsEnum } from '@utils';
import { useAuth, useSelector } from '@hooks';
import { useEffect } from 'react';
import ModalScreen from '@screens/Modal';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
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
      >
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator(): JSX.Element {
  const authenticated = useAuth();
  const {
    token: { access_token },
  } = useSelector((state) => state.authUser);

  useEffect(() => {}, [access_token]);
  return (
    <Stack.Navigator>
      {authenticated && (
        <Stack.Group>
          <Stack.Screen
            name='Root'
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      )}

      {!authenticated && (
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
        </>
      )}

      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
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
            paddingBottom: 10,
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
              <Icon
                name='md-home-outline'
                color={color}
                size={size}
                type={IconsEnum.ionicon}
              />
            ),
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
}
