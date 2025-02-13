import { Avatar } from './Avatar';
import { GrayIshIconButton } from './Button';
import { DoubleSquare } from './Icon';
import { View, Text, Pressable } from './Themed';
import UserImage from '@assets/images/user.jpg';
import colors from '@constants/Colors';
import { StyleSheet } from 'react-native';

interface Props {
  onPress?: () => void;
  title?: string;
  Icon?: any;
  showProfile?: boolean;
  disabled?: boolean;
}

export const HeaderTile = ({
  onPress,
  title,
  Icon,
  showProfile = true,
  disabled = true,
}: Props) => {
  return (
    <View style={styles.headerContainer}>
      <GrayIshIconButton
        height={40}
        width={40}
        onPress={onPress}
        disabled={disabled}
      >
        {Icon ? (
          Icon
        ) : (
          <DoubleSquare
            color={colors['dark'].tint}
            size={20}
          />
        )}
      </GrayIshIconButton>
      {title && (
        <Text
          style={styles.title}
          fontFamily='poppins-bold'
        >
          {title}
        </Text>
      )}
      {showProfile ? (
        <Avatar
          source={UserImage}
          size={40}
          style={{ marginVertical: 20 }}
        />
      ) : (
        <View style={{ width: 48 }}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'poppins-bold',
    color: colors['dark'].text,
  },
});
