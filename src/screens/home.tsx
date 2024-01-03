import useColorScheme from '@hooks/useColorScheme';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import colors from '@constants/Colors';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView
      style={
        (styles.container,
        {
          backgroundColor: colors[colorScheme].background,
        })
      }
    >
      <Text style={styles.title}>Welcome to React Native for Web!</Text>
      <Text style={styles.text}>Start editing to see some magic happen :</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 16,
  },
});
