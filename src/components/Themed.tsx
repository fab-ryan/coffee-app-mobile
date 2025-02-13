import {
  Text as DefaultText,
  View as DefaultView,
  Pressable as DefaultPressable,
  TextInput as DefaultTextInput,
  PressableProps as DefaultPressableProps,
} from 'react-native';

import { secondaryColor } from '@constants/Colors';
import { useThemeColor } from '@hooks/useThemeColor';
import React from 'react';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type DefaultFontAwesomeProps = {
  size?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  name?: any;
};
type FontTypes =
  | 'poppins'
  | 'poppins-bold'
  | 'poppins-light'
  | 'poppins-medium'
  | 'poppins-thin'
  | 'poppins-extra-bold'
  | 'poppins-semi-bold';

export type TextProps = ThemeProps &
  DefaultText['props'] & { fontFamily?: FontTypes };
export type ViewProps = ThemeProps & DefaultView['props'];
export type PressableProps = ThemeProps &
  DefaultPressableProps &
  DefaultView['props'];

interface ExtraProps {
  ref?: React.RefObject<DefaultTextInput>;
}

export type FontAwesomeProps = ThemeProps & DefaultFontAwesomeProps;
export type TextInputProps = ThemeProps &
  DefaultTextInput['props'] &
  DefaultTextInput['props'] &
  ExtraProps & { fontFamily?: FontTypes };

export function Text(props: TextProps) {
  const {
    style,
    lightColor,
    fontFamily = 'poppins',
    darkColor,
    ...otherProps
  } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <DefaultText
      style={[{ color }, style, { fontFamily }]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );
  return (
    <DefaultView
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}

export function Pressable(props: PressableProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return (
    <DefaultPressable
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}

export function TextInput(props: TextInputProps) {
  const {
    style,
    lightColor = '#E2E9EB',
    fontFamily = 'poppins',
    darkColor,
    ...otherProps
  } = props;
  const color = useThemeColor(
    { light: secondaryColor, dark: lightColor },
    'text',
  );
  const placeholderColor = useThemeColor(
    { light: 'rgba(3, 49, 75, 0.4)', dark: 'rgba(255, 255, 255, 0.4)' },
    'text',
  );
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return (
    <DefaultTextInput
      style={[{ color, backgroundColor }, style, { fontFamily }]}
      placeholderTextColor={placeholderColor}
      {...otherProps}
      ref={props.ref}
    />
  );
}

import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export function Link({ style, ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      {...props}
      style={[style, { justifyContent: 'center' }]}
    />
  );
}
