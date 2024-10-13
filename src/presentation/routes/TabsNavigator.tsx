import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SideMenuNavigation} from './SideMenuNavigation';
import {SettingsScreen} from '../screen/settings/SettingsScreen';
import {HomeScreen} from '../screen/home/HomeScreen';
import {Tab1Screen} from '../screen/tabs/Tab1Screen';
import {Tab2Screen} from '../screen/tabs/Tab2Screen';
import {Tab3Screen} from '../screen/tabs/TabScreen';
import {globalColors, globalStyles} from '../theme/theme';
import {Text} from 'react-native';
import {TopNavigator} from './TopNavigator';
import {StackNavigation} from './StackNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          padding: 10,
          height: 110,
        },
      }}>
      <Tab.Screen
        name="TAB 1"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <Text style={{color}}>
              <Ionicons name="home-outline" size={30} />
            </Text>
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="TAB 2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => (
            <Text style={{color}}>
              <Ionicons name="albums-outline" size={30} />
            </Text>
          ),
        }}
        component={TopNavigator}
      />
      <Tab.Screen
        name="TAB 3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => (
            <Text style={{color}}>
              <Ionicons name="bag-outline" size={30} />
            </Text>
          ),
        }}
        component={StackNavigation}
      />
    </Tab.Navigator>
  );
}
