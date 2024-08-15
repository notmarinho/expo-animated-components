import { StyleSheet } from 'react-native';
import React, { FC, useEffect } from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  isSelected: boolean;
};

const StepIndicatorItem: FC<Props> = ({ isSelected }) => {
  const progress = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], ['gray', 'white']),
  }));

  useEffect(() => {
    progress.value = withTiming(isSelected ? 1 : 0);
  }, [isSelected]);

  return <Animated.View style={[styles.container, animatedStyle]} />;
};

export default StepIndicatorItem;

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    width: 8,
    backgroundColor: 'gray',
    borderRadius: 6,
  },
});
