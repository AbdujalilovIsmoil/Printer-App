import { HomeScreen, LoginScreen } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ header: () => {} }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
