import { StatusBar } from 'react-native';
import Header from '../../shared/UI/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeHeader from '../../screens/HomeScreen/components/Header';
import PrinterScreen from '../../screens/PrinterScreen/PrinterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeScreen,
  BatutScreen,
  LoginScreen,
  WaterScreen,
  IceCreamScreen,
  CheckScreen,
} from '../../screens';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          animation: 'slide_from_right',
        }}
      >
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
        <Stack.Screen
          name="batut"
          component={BatutScreen}
          options={{
            title: 'Vaqtni tanlash',
            header: ({ options }) => <Header>{options.title}</Header>,
          }}
        />
        <Stack.Screen
          name="ice-cream"
          component={IceCreamScreen}
          options={{
            title: 'Muzqaymoq tanlash',
            header: ({ options }) => <Header>{options.title}</Header>,
          }}
        />
        <Stack.Screen
          name="water"
          component={WaterScreen}
          options={{
            title: 'Suv tanlash',
            header: ({ options }) => <Header>{options.title}</Header>,
          }}
        />
        <Stack.Screen
          name="check"
          component={CheckScreen}
          options={{
            title: "To'lov qo'g'ozi",
            header: ({ options }) => <Header>{options.title}</Header>,
          }}
        />
        <Stack.Screen
          name="printer-screen"
          component={PrinterScreen}
          options={{
            title: "To'lov qo'g'ozi",
            header: ({ options }) => <Header>{options.title}</Header>,
          }}
        />
      </Stack.Navigator>

      <StatusBar
        translucent={false}
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
      />
    </SafeAreaProvider>
  );
};

export default RootStack;
