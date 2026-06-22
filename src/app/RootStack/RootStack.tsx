import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen, LoginScreen } from '../../screens';
import HomeHeader from '../../screens/HomeScreen/components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            header: () => <HomeHeader />,
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default RootStack;
