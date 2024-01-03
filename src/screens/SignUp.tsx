import { View, Text, Button, Link } from '@components';
import { InputText } from '@components/InputText';
import { lightColor, secondaryColor } from '@constants/Colors';
import { Clock } from '@svg';
import { RootStackScreenProps } from '@utils';
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpValidationSchema } from '@schemas';

type SignUpTypes = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

export default function SignUp({
  navigation,
}: RootStackScreenProps<'Register'>) {
  
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpTypes>({
    mode: 'onBlur',
    resolver: yupResolver(signUpValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
  });

  const handleSignUp = (data: unknown) => {
    console.log(data);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Clock />
        <Text style={styles.title}>Join now</Text>
        <Text style={styles.description}>
          Hello, We are happy to have you. Please provide bellow details so we
          can sign you up
        </Text>
        <View style={styles.form}>
          <InputText
            containerStyle={{
              marginTop: 15,
            }}
            placeholder='Name'
            autoCapitalize='none'
            autoCorrect={false}
            textContentType='name'
            returnKeyType='next'
            name='name'
            control={control}
            error={errors.name?.message}
          />
          <InputText
            containerStyle={{
              marginTop: 15,
            }}
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
            containerStyle={styles.textInput}
            placeholder='Phone'
            keyboardType='phone-pad'
            autoCapitalize='none'
            autoCorrect={false}
            textContentType='telephoneNumber'
            returnKeyType='next'
            name='phone'
            control={control}
            error={errors.phone?.message}
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
            }}
            error={errors.password?.message}
          />
          <InputText
            placeholder='Confirm Password'
            autoCapitalize='none'
            autoCorrect={false}
            textContentType='password'
            returnKeyType='done'
            secureTextEntry={true}
            name='confirmPassword'
            control={control}
            containerStyle={{
              marginTop: 15,
            }}
            error={errors.confirmPassword?.message}
          />

          <Button
            color='primary'
            style={styles.submitBtn}
            title='Sign up'
            onPress={handleSubmit(handleSignUp)}
          />

          <View style={{ marginTop: 20 }}>
            <Text>
              Already have an account?{' '}
              <Link
                onPress={() => navigation.navigate('Login')}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 0,
                }}
              >
                <Text
                  style={{
                    color: secondaryColor,
                    alignContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  Login
                </Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 38,
    marginVertical: 17,
  },
  description: {
    textAlign: 'center',
  },
  textInput: {
    width: '100%',
    marginTop: 20,
  },
  form: {
    width: '100%',
  },
  submitBtn: {
    marginTop: 20,
  },
  loginLink: {
    color: lightColor,
  },
});
