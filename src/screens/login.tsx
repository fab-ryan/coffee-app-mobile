import { SafeAreaView, StyleSheet } from 'react-native';
import { View, Text, Image, Link , Button
   } from '@components';

import { lightSecondaryColor } from '@constants/Colors';
import logo from '@assets/images/logo.png';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText } from '@components/InputText';

import { RootStackScreenProps } from '@utils';
import { loginValidationSchema } from '@schemas';

type LoginData = {
  email: string;
  password: string;
};

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<'Login'>) {
  const {
    control,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm<LoginData>({
    mode: 'onBlur',
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLogin = (data: any) => {
    if(submitCount === 0) {
      return;
    }
    console.log(data);
  };
  const handleSignUp = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={logo}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.title}>Let&apos;s Login</Text>
        <Text style={styles.text}>
          Welcome back, Enter details bellow to continue
        </Text>
      </View>
      <View style={styles.form}>
        <InputText
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='emailAddress'
          returnKeyType='next'
          name='email'
          control={control}
          error={errors.email?.message}
        />
        <InputText
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='password'
          returnKeyType='done'
          secureTextEntry={true}
          name='password'
          control={control}
          containerStyle={{
            marginTop: 15,
            marginBottom: 15,
          }}
          error={errors.password?.message}
        />
         <Link style={styles.forgotPassword} onPress={() => {}}>
           <Text>Forgot password?</Text>
        </Link>
        <Button
          color='primary'
          style={styles.submitBtn}
          title='Login'
          onPress={handleSubmit(handleLogin)}
        />
        <Text style={styles.or}>OR</Text>
        <Button
          color='secondary'
          style={styles.submitBtn}
          title='Sign up'
          onPress={handleSignUp}
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
    textAlign: 'center',
  },
  form: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 30,
  },
  submitBtn: {
    width: '100%',
    marginBottom: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
});
