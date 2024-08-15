import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import Animated, {
  FadeInLeft,
  FadeOut,
  LinearTransition,
  useSharedValue,
  withSpring,
  ZoomIn,
  ZoomOut,
} from 'react-native-reanimated';
import StepIndicatorItem from './StepIndicatorItem';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StepCounterProps } from './types';

const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);

const GAP = 12;
const INDICATOR_SIZE = 8;
const PROGRESS_WIDTH = GAP + INDICATOR_SIZE;

const StepCounter: FC<StepCounterProps> = ({
  totalSteps = 0,
  backLabel = 'Back',
  nextLabel = 'Next',
  finishLabel = 'Finish',
  onNext,
  onPrev,
  onFinish,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const animatedProgressWidth = useSharedValue(PROGRESS_WIDTH);

  const isComplete = currentStep === totalSteps;
  const arrayOfSteps = Array.from(Array(totalSteps).keys());

  const increaseStep = () => setCurrentStep((c) => (c === totalSteps ? c : c + 1));
  const decrementStep = () => setCurrentStep((c) => (c > 2 ? c - 1 : 1));

  const handleNext = () => {
    if (isComplete) {
      onFinish?.();
      return;
    }

    onNext?.();
    increaseStep();
  };

  const handlePrev = () => {
    onPrev?.();
    decrementStep();
  };

  useEffect(() => {
    animatedProgressWidth.value = withSpring(PROGRESS_WIDTH * currentStep);
  }, [currentStep]);

  return (
    <View style={styles.container}>
      <View style={styles.stepsContainer}>
        <Animated.View style={[styles.progressContainer, { width: animatedProgressWidth }]} />
        {arrayOfSteps.map((v, i) => (
          <StepIndicatorItem key={`@StepIndicatorItem-${i}`} isSelected={currentStep >= i + 1} />
        ))}
      </View>
      <Animated.View style={styles.buttonsContainer}>
        {currentStep > 1 && (
          <AnimatedPressable
            disabled={currentStep === 1}
            onPress={handlePrev}
            entering={FadeInLeft}
            exiting={FadeOut}
            style={styles.secondaryButton}>
            <Text style={styles.secondaryLabel}>{backLabel}</Text>
          </AnimatedPressable>
        )}
        <AnimatedPressable
          layout={LinearTransition}
          style={styles.primaryButton}
          onPress={handleNext}>
          {isComplete && (
            <Animated.View layout={LinearTransition} entering={ZoomIn} exiting={ZoomOut}>
              <Ionicons name="checkmark-circle" size={24} color="white" />
            </Animated.View>
          )}
          <Animated.Text
            key={isComplete ? finishLabel : nextLabel}
            layout={LinearTransition}
            entering={ZoomIn}
            exiting={ZoomOut}
            style={styles.primaryLabel}>
            {isComplete ? finishLabel : nextLabel}
          </Animated.Text>
        </AnimatedPressable>
      </Animated.View>
    </View>
  );
};

export default StepCounter;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
  },
  stepsContainer: {
    marginBottom: 24,
    flexDirection: 'row',
    gap: GAP,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonsContainer: { flexDirection: 'row', alignSelf: 'stretch', gap: 8 },
  secondaryButton: {
    height: 54,
    borderRadius: 30,
    flex: 1,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryLabel: { fontWeight: 'bold', color: '#303030' },
  primaryButton: {
    height: 54,
    borderRadius: 30,
    flex: 2,
    backgroundColor: '#357DF8',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  primaryLabel: { color: 'white', fontWeight: 'bold' },
  progressContainer: {
    height: PROGRESS_WIDTH,
    borderRadius: PROGRESS_WIDTH / 2,
    backgroundColor: '#66E069',
    position: 'absolute',
    transform: [{ translateX: -(GAP / 2) }],
  },
});
