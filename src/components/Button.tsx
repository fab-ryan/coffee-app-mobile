/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { Text, Pressable, PressableProps, View } from './Themed';
import Colors, {
  primaryColor,
  secondaryColor,
  lightColor as defaultLightColor,
  lightSecondaryColor,
  whiteColor,
  redColor,
} from '@constants/Colors';

import { LinearGradient } from 'expo-linear-gradient';

import useColorScheme from '@hooks/useColorScheme';
import { Icon } from './Icon';

import { IconProps, IconsEnum } from '@utils';

type props = {
  title?: string;
  color?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
};

export function Button(props: props & PressableProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const {
    title,
    style,
    lightColor = isDark ? defaultLightColor : primaryColor,
    darkColor = isDark ? primaryColor : secondaryColor,
    color = 'primary',
    loading,
    ...otherProps
  } = props;
  const isPrimary = color === 'primary';
  const isDanger = color === 'danger';

  return (
    <Pressable
      lightColor={isDanger ? redColor : isPrimary ? darkColor : secondaryColor}
      darkColor={
        isDanger ? redColor : isPrimary ? secondaryColor : lightSecondaryColor
      }
      style={[styles.button, style]}
      {...otherProps}
    >
      <View style={styles.buttonContainer}>
        <Text
          lightColor={whiteColor}
          darkColor={whiteColor}
          style={[styles.buttonText]}
        >
          {title}
        </Text>
        {loading && (
          <Icon
            type={IconsEnum.feather}
            name={'loader'}
            size={16}
            color={whiteColor}
            style={{ marginLeft: 10 }}
          />
        )}
      </View>
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

type TGray = {
  children: React.PropsWithChildren;
  onPress?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
  disabled?: boolean;
  width?: number;
  height?: number;
};

export const GrayIshIconButton = ({
  children,
  onPress,
  style,
  disabled,
  width,
  height,
}: TGray & TouchableOpacityProps) => {
  const themeColor = useColorScheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.iconButtonGrayIsh,

        {
          backgroundColor: themeColor === 'dark' ? '#1B1B1B' : '#fff',
          borderColor: themeColor === 'dark' ? '#014A75' : '#CEE6F8',

          width: width ?? 48,
          height: height ?? 48,
        },
        style,
      ]}
      disabled={disabled}
    >
      <LinearGradient
        colors={[Colors['dark'].tint, 'transparent']}
        style={{
          borderRadius: 15,
          width: width ?? 48,
          height: height ?? 48,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </LinearGradient>
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

  iconButtonGrayIsh: {
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: Colors['dark'].tint,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
});
