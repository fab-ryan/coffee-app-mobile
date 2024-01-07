import React, { useEffect, useRef } from 'react';
import { Animated, ScrollView } from 'react-native';
import { Text, Image, View } from '@components';

interface FadeInProps {
  duration?: number;
  delay?: number;
  children?: React.ReactNode | React.ReactElement;
  type?: 'View' | 'Text' | 'Image' | 'ScrollView';
  style?: any;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  duration = 500,
  delay = 0,
  type = 'View',
  style = undefined,
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration, delay]);

  function getAnimatedType() {
    switch (type) {
      case 'View':
        return Animated.createAnimatedComponent(View);
      case 'Text':
        return Animated.createAnimatedComponent(Text);
      case 'Image':
        return Animated.createAnimatedComponent(Image);
      case 'ScrollView':
        return Animated.createAnimatedComponent(ScrollView);
      default:
        return Animated.createAnimatedComponent(View);
    }
  }

  const AnimatedType = getAnimatedType();

  return (
    <AnimatedType
      style={[
        {
          opacity: fadeAnim,
        },
        style,
      ]}
    >
      {children}
    </AnimatedType>
  );
};

export { FadeIn };
