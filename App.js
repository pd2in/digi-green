import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import HydroponicConfigContextProvider from './src/config/Context';

export default function App() {
  return (
    <HydroponicConfigContextProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </HydroponicConfigContextProvider>
  );
}
