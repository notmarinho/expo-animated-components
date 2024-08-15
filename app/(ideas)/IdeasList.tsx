import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const IdeasList = () => {
  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.card} onPress={() => router.push('/(ideas)/StepIndicatorScreen')}>
        <Text>Steps Indicator</Text>
      </Pressable>
    </ScrollView>
  );
};

export default IdeasList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 170,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'SpaceMono-Regular',
  },
  card: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    height: 54,
    marginBottom: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
