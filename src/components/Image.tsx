import { Image as DefaultImage, StyleSheet } from 'react-native';

import { tint } from '@constants/Colors';

export type ImageProps = DefaultImage['props'];

export function Image({ style, ...props }: ImageProps) {
  return (
    <DefaultImage
      style={[styles.image, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: tint,
  },
});
