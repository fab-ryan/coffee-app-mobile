import { useThemeColor } from '@hooks/useThemeColor';
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';
import {IconProps, Icons} from '@utils'

 function Icon<T extends Icons>(props: IconProps<T>) {
  const {  size = 16, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const IconComponent = getIconComponent(props.type);

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <IconComponent
      size={size || 24}
      {...otherProps}
      color={props.color ?? color}
    />
  );
}

function getIconComponent(type?: Icons) {
  switch (type) {
    case Icons.fa:
      return FontAwesome;
    case Icons.feather:
      return Feather;
    case Icons.material:
      return MaterialCommunityIcons;
    case Icons.ionicon:
      return Ionicons;
    case Icons.antdesign:
      return AntDesign;
    case Icons.entypo:
      return Entypo;
    default:
      return FontAwesome;
  }
}


export {Icon}
