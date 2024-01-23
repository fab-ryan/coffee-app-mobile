import { Text, View } from '@components';
import { CartCart } from '@components/CartCard';
import { HeaderTile } from '@components/Header';
import { DumpyCart } from '@utils';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function CartScreen() {
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
        <HeaderTile title='Cart' />
        <View>
          {DumpyCart?.map((item, index) => (
            <CartCart
              key={index}
              {...item}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
  },
});
