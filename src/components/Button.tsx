/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { Text, Pressable, PressableProps } from './Themed';
import {
  primaryColor,
  secondaryColor,
  lightColor as defaultLightColor,
  lightSecondaryColor,
  whiteColor,
  redColor,
} from '@constants/Colors';

import useColorScheme from '@hooks/useColorScheme';
import { Icon } from './Icon';

import { IconProps, IconsEnum } from '@utils';

type props = {
  title?: string;
  color?: 'primary' | 'secondary' | 'danger';
};

export  function Button(props: props & PressableProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const {
    title,
    style,
    lightColor = isDark ? defaultLightColor : primaryColor,
    darkColor = isDark ? primaryColor : secondaryColor,
    color = 'primary',
    ...otherProps
  } = props;
  const isPrimary = color === 'primary';
  const isDanger = color === 'danger';
  return (
    <Pressable
      lightColor={isDanger ? redColor : isPrimary ? darkColor : secondaryColor}
      darkColor={isDanger ? redColor : isPrimary ? secondaryColor : lightSecondaryColor}
      style={[styles.button, style]}
      {...otherProps}
    >
      <Text
        lightColor={ whiteColor}
        darkColor={ whiteColor }
        style={styles.buttonText}
      >
        {title}
      </Text>
    </Pressable>
  );
}


export const IconButton = ({
  onPress,
  size = 18,
  style,
  name,
  ...others
}: IconProps<IconsEnum> & TouchableOpacityProps) => {
  const themeColor = useColorScheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.iconButton,
        {
          backgroundColor: themeColor === 'dark' ? lightSecondaryColor : '#fff',
          borderColor: themeColor === 'dark' ? '#014A75' : '#CEE6F8',
        },
        style,
      ]}
    >
    <Icon
      name={name}
      size={size}
      lightColor={'rgba(3, 49, 75, 0.6)'}
      darkColor={'rgba(255, 255, 255, 0.6)'}
        {...others}

    />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 10,
    minHeight: 48,
    justifyContent: 'center',
  },
  iconButton: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
