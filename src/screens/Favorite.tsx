import { Text } from '@components';
import { HeaderTile } from '@components/Header';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FavoriteScreen() {
  return (
    <SafeAreaView
      edges={['right', 'bottom', 'left', 'top']}
      style={{ flex: 1 }}
      mode='padding'
    >
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <HeaderTile title='Favorities' />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
  },
});
