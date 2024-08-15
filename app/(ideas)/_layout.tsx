import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="IdeasList" options={{ title: 'Components', headerLargeTitle: true }} />
      <Stack.Screen
        name="StepIndicatorScreen"
        options={{ title: 'Step Indicator', headerLargeTitle: true }}
      />
    </Stack>
  );
}
