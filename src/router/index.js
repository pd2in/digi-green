import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Splash } from '../pages';
import MinMaxPPM from '../pages/MinMaxPPM';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MinMaxPPM"
        component={MinMaxPPM}
        options={{ headerShown: true, headerTitle: 'Minimum dan Maximum PPM' }}
      />
    </Stack.Navigator>
  );
};

export default Router;
