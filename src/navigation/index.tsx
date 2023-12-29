
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
import { RootStackParamList, RootTabParamList } from './types';

import HomeScreen from '@screens/Home';
import LoginScreen from '@screens/Login';
import { Icon, IconType } from '@components';

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
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Root'
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen==
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      /> */}
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
                type={IconType.ionicon
                }
              />
            ),
            headerShown: false,
          }}
        />
      </BottomTab.Navigator>
    </SafeAreaView>
  );
}
