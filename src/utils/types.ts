/* eslint-disable @typescript-eslint/no-namespace */
import {
    FontAwesome,
    Feather,
    MaterialCommunityIcons,
    Ionicons,
    AntDesign,
    Entypo,
  } from '@expo/vector-icons';
  import * as React from 'react';

export enum IconsEnum {
    fa = 'fa',
    feather = 'feather',
    material = 'material',
    ionicon = 'ionicon',
    antdesign = 'antdesign',
    entypo = 'entypo',
  }

  export type IconProps<T extends IconsEnum> = {
    name: ComponentProps[T]['name'] ;
    color?: string;
    size?: number;
    type?: T;
    style?:StyleProp<TextStyle>;
  } & ThemeProps;

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
  };
  
interface ComponentProps {
    fa : React.ComponentProps<typeof FontAwesome>,
    feather : React.ComponentProps<typeof Feather>,
    material : React.ComponentProps<typeof MaterialCommunityIcons>,
    ionicon : React.ComponentProps<typeof Ionicons>,
    antdesign : React.ComponentProps<typeof AntDesign>,
    entypo : React.ComponentProps<typeof Entypo>,
  }

  import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleProp, TextStyle } from 'react-native';


export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  // NotFound: undefined;
  Login: undefined;
  Register: undefined;
  NotFound: undefined;
  Modal: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
