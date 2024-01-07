import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { Text, View } from './Themed';
import { ICategory } from '@types';
import { useState } from 'react';
import Colors from '@constants/Colors';
import { useAnimatedStyle } from 'react-native-reanimated';

interface IProps {
  data?: ICategory[];
  onClick?: (value: string) => void;
}

export function CategoriesList({ data, onClick }: IProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: Colors['dark'].tabIconSelected,
    };
  });

  return (
    <ScrollView
      style={styles.categoryContainer}
      horizontal
      automaticallyAdjustsScrollIndicatorInsets={false}
      indicatorStyle='white'
      showsHorizontalScrollIndicator={false}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          setActiveCategory('all');
          onClick && onClick('all');
        }}
      >
        <View style={styles.category}>
          <Text
            fontFamily='poppins-bold'
            style={[
              activeCategory === 'all'
                ? {
                    color: Colors['dark'].tabIconSelected,
                  }
                : {
                    color: Colors['dark'].lightSecondaryColor,
                  },
              styles.textCategories,
            ]}
          >
            All
          </Text>
          {activeCategory === 'all' && <View style={styles.active} />}
        </View>
      </TouchableWithoutFeedback>

      {data?.map((item, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => {
            setActiveCategory(item.id);
            onClick && onClick(item.id);
          }}
        >
          <View style={styles.category}>
            <Text
              fontFamily='poppins-bold'
              style={[
                activeCategory === item.id
                  ? {
                      color: Colors['dark'].tabIconSelected,
                    }
                  : {
                      color: Colors['dark'].lightSecondaryColor,
                    },
                styles.textCategories,
              ]}
            >
              {item.name}
            </Text>
            {activeCategory === item.id && <View style={styles.active} />}
          </View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingVertical: 20,
  },
  textCategories: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  category: {
    position: 'relative',
    marginRight: 20,
  },
  active: {
    height: 10,
    width: 10,
    backgroundColor: Colors['dark'].tabIconSelected,
    marginTop: 4,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 'auto', // Align to the right
    marginRight: 'auto',
  },
});
