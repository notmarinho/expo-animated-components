import { ActivityIndicator, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { router } from 'expo-router';

const LoadingAppScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      router.push('/(ideas)/IdeasList');
    }, 200);
  }, []);

  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', justifyContent: 'center' }]}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default LoadingAppScreen;
