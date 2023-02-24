import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Schedule from '../Screens/Schedule';
import Menu from '../Screens/Menu';

const Routes = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Menu">
          <Stack.Screen 
            name="Menu" 
            component={Menu} 
            />
          <Stack.Screen 
            name="Schedule" 
            component={Schedule} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;