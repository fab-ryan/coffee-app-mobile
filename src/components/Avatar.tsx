import { Image, ImageProps } from './Image';

interface Props extends ImageProps {
  size?: number;
  borderRadius?: number;
}

export const Avatar = (props: Props) => {
  return (
    <Image
      {...props}
      
      style={[
        {
          width: props.size,
          height: props.size,
          borderRadius: props.borderRadius,
        },
        props.style,
      ]}
    />
  );
};

Avatar.defaultProps = {
  size: 30,
  borderRadius: 15,
  
};
