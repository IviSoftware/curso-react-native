import {createDrawerNavigator} from '@react-navigation/drawer';
import {globalColors} from '../theme/theme';
import {useWindowDimensions} from 'react-native';

//Pantallas
import {StackNavigation} from './StackNavigation';
import {ProfileScreen} from '../screen/profile/ProfileScreen';
import {TabNavigator} from './TabsNavigator';

const Drawer = createDrawerNavigator();

export function SideMenuNavigation() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveBackgroundColor: 'white',
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
