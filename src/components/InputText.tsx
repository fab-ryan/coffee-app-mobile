import { useState } from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputFocusEventData,
  NativeSyntheticEvent,
  TouchableOpacity,
} from 'react-native';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import { TextInput, TextInputProps, Text } from './Themed';
import {
  tint,
  lightColor,
  inputBackgroundColor,
  redColor,
} from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Icon } from './Icon';
import { IconProps, IconsEnum } from '@utils';
import { Flag } from '@svg';

type TextInputFieldProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  error?: string | boolean;
  icon?: IconProps<IconsEnum>;
  iconType?: keyof typeof IconsEnum;
};

type ControlledTextInputProps<T> = TextInputFieldProps &
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Partial<ControllerProps<T>> &
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Pick<ControllerProps<T>, 'name'>;

function TextInputField({
  style,
  placeholder,
  containerStyle,
  secureTextEntry,
  label,
  keyboardType,
  error,
  onBlur = () => {},
  onFocus = () => {},
  icon,
  iconType,
  ...props
}: TextInputProps & TextInputFieldProps) {
  const [secure, setSecure] = useState(secureTextEntry);
  const [isFocused, setOnFocus] = useState(false);
  const hasPhonePadKeyboard = keyboardType === 'phone-pad';

  const theme = useColorScheme();

  const toggleFocus = () => {
    setOnFocus(!isFocused);
  };
  const toggleSecure = () => {
    setSecure(!secure);
  };
  const onBlurhandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur(e);
    toggleFocus();
  };

  const onFocusHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onFocus(e);
    toggleFocus();
  };

  let _style: StyleProp<TextStyle> = [style];
  if (secureTextEntry) {
    _style = [
      ..._style,
      {
        paddingRight: 40,
      },
    ];
  }

  if (isFocused) {
    _style = [
      ..._style,
      {
        borderColor: theme === 'light' ? tint : lightColor,
      },
    ];
  }
  if (error) {
    _style = [
      ..._style,
      {
        borderColor: '#F00',
      },
    ];
  }

  if (hasPhonePadKeyboard) {
    _style = [
      ..._style,
      {
        textAlign: 'center',
      },
    ];
  }
  if (theme === 'light') {
    _style = [
      ..._style,
      {
        backgroundColor: inputBackgroundColor,
      },
    ];
  } else {
    _style = [
      ..._style,
      {
        backgroundColor: inputBackgroundColor,
      },
    ];
  }
  return (
    <View style={[containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={
          icon
            ? [styles.inputContainer, { paddingRight: 50 }, ..._style]
            : [styles.inputContainer, ..._style]
        }
      >
        {icon && (
          <Icon
            name={icon['name']}
            size={18}
            type={IconsEnum[iconType || 'fa']}
            lightColor={
              isFocused ? 'rgba(3, 49, 75, 0.6)' : 'rgba(3, 49, 75, 0.4)'
            }
            darkColor={
              isFocused
                ? 'rgba(255, 255, 255, 0.6)'
                : 'rgba(255, 255, 255, 0.4)'
            }
          />
        )}
        <TextInput
          {...props}
          darkColor='#608DA7'
          secureTextEntry={secure}
          placeholder={placeholder}
          keyboardType={keyboardType}
          style={[styles.textInput, ..._style]}
          onBlur={onBlurhandler}
          onFocus={onFocusHandler}
        />

        {hasPhonePadKeyboard && (
          <View style={styles.flag}>
            <Flag />
            <Text style={styles.flagText}>+250</Text>
            <Text
              darkColor='rgba(255, 255, 255, 0.4)'
              lightColor='rgba(3, 49, 75, 0.4)'
              style={styles.flagBar}
            >
              |
            </Text>
          </View>
        )}

        {secureTextEntry && (
          <TouchableOpacity
            onPress={toggleSecure}
            style={styles.eyeButton}
          >
            {secure ? (
              <Icon
                name='eye-off'
                type={IconsEnum.feather}
                size={18}
                lightColor={
                  isFocused ? 'rgba(3, 49, 75, 0.6)' : 'rgba(3, 49, 75, 0.4)'
                }
                darkColor={
                  isFocused
                    ? 'rgba(255, 255, 255, 0.6)'
                    : 'rgba(255, 255, 255, 0.4)'
                }
              />
            ) : (
              <Icon
                name='eye'
                type={IconsEnum.feather}
                size={18}
                lightColor={
                  isFocused ? 'rgba(3, 49, 75, 0.6)' : 'rgba(3, 49, 75, 0.4)'
                }
                darkColor={
                  isFocused
                    ? 'rgba(255, 255, 255, 0.6)'
                    : 'rgba(255, 255, 255, 0.4)'
                }
              />
            )}
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
}

export const InputText = <TFieldValues extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  ...props
}: ControlledTextInputProps<TFieldValues>) => {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInputField
          {...props}
          onChangeText={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}
      name={name}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    width: '100%',
    backgroundColor: 'transparent',
    padding: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 0.01,
    borderColor: '#E2E9EB',
    borderRadius: 15,
    padding: 15,
    position:'relative',
  },
  eyeButton: {
    position: 'absolute',
    top: 'auto',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    width: 48,
  },
  errorMessage: {
    color: redColor,
  },

  flag: {
    position: 'absolute',
    top: 15,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    left: 12,
    width: 70,
    display: 'flex',
    flexDirection: 'row',

  },
  inputHasFlag: {
    paddingLeft: 55,
  },
  flagText: {
    fontSize: 16,
    paddingLeft: 5,
  },
  flagBar: {
    paddingLeft: 3,
   
  },
});
