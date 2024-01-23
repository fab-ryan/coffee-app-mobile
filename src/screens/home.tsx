import useColorScheme from '@hooks/useColorScheme';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '@constants/Colors';
import {
  Text,
  View,
  CategoriesList,
  ProductCard,
} from '@components';
import { useForm } from 'react-hook-form';
import { InputText } from '@components/InputText';
import { IconsEnum } from '@utils';
import { useGetCategoriesQuery } from '@redux';
import { useActions, useSelector } from '@hooks';
import { Products } from '@utils/dummy';
import { HeaderTile } from '@components/Header';

export default function HomeScreen() {
  const { data: categories } = useGetCategoriesQuery(null);
  const { setCategory } = useActions();
  const { categoryId } = useSelector((state) => state.categories);

  const colorScheme = useColorScheme();
  const { control } = useForm({
    defaultValues: {
      search: '',
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <HeaderTile  />
        <Text
          fontFamily='poppins-extra-bold'
          style={styles.headerTitler}
        >
          Find the best coffee for you
        </Text>

        <InputText
          control={control}
          name='search'
          placeholder='Find Your Coffee...'
          containerStyle={{ marginTop: 30 }}
          icon={{
            name: 'search',
            color: colors[colorScheme].tint,
            size: 20,
            type: IconsEnum.fa,
            style: {
              marginRight: 20,
            },
          }}
        />
        <View>
          <CategoriesList
            data={categories?.data}
            onClick={(item) => setCategory({ categoryId: item })}
          />
        </View>

        <View style={styles.productContainer}>
          <FlatList
            horizontal
            indicatorStyle='black'
            showsHorizontalScrollIndicator={false}
            data={Products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => (
              <TouchableOpacity style={styles.horizontalCard}>
                <ProductCard {...item.item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  headerTitler: {
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 20,
    width: 250,
  },
  productContainer: {
    marginTop: 5,
  },
  horizontalCard: {
    marginBottom: 10,
    marginRight: 10,
    width: 250,
  },
});
