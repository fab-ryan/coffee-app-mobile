import useColorScheme from '@hooks/useColorScheme';
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from '@constants/Colors';
import { GrayIshIconButton, Text, View } from '@components';
import { DoubleSquare } from '@components/Icon';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <GrayIshIconButton>
          <DoubleSquare
            color={colors[colorScheme].text}
            size={15}
          />
        </GrayIshIconButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },

});
