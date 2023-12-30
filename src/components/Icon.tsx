import { useThemeColor } from '@hooks/useThemeColor';
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';
import {IconProps, IconsEnum} from '@utils'

 function Icon<T extends IconsEnum>(props: IconProps<T>) {
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

function getIconComponent(type?: IconsEnum) {
  switch (type) {
    case IconsEnum.fa:
      return FontAwesome;
    case IconsEnum.feather:
      return Feather;
    case IconsEnum.material:
      return MaterialCommunityIcons;
    case IconsEnum.ionicon:
      return Ionicons;
    case IconsEnum.antdesign:
      return AntDesign;
    case IconsEnum.entypo:
      return Entypo;
    default:
      return FontAwesome;
  }
}


export {Icon}
