import {createStackNavigator} from '@react-navigation/stack';
import {Login} from "../pages";

const Stack = createStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};

export default Router;
