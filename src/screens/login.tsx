/* eslint-disable react/no-unescaped-entities */
import { SafeAreaView, StyleSheet } from 'react-native';
import { View, Text, Image,  } from '@components';

import { lightSecondaryColor } from '@constants/Colors';
import logo from '@assets/images/logo.png';

import useMyForm from '@hooks/useFormHook';
import { InputText } from '@components/InputText';

export default function LoginScreen() {
  const { control } = useMyForm({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={logo}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.title}>Let's you in</Text>
        <Text style={styles.text}>
          Welcome back, Enter details bellow to continue
        </Text>
      </View>
      <View style={styles.form}>
        <InputText
          label='Email'
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='emailAddress'
          returnKeyType='next'
          name='email'
          control={control}
        />
        <View style={{ height: 10 }} />
        <InputText
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='password'
          returnKeyType='done'
          onSubmitEditing={() => {}}
          secureTextEntry={true}
          name='password'
          control={control}
          
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text: {
    color: lightSecondaryColor,
    marginTop: 10,
    marginBottom: 20,
  },
  or: {
    color: lightSecondaryColor,
    marginTop: 20,
    marginBottom: 20,
  },
  form: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 30,
  },
});
