import { StyleSheet, View } from 'react-native';
import React from 'react';
import { StepCounter } from '@/components/StepCounter';

const StepIndicatorScreen = () => {
  return (
    <View style={styles.container}>
      <StepCounter totalSteps={3} />
    </View>
  );
};

export default StepIndicatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
