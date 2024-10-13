import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from '../screen/profile/ProfileScreen';
import {SettingsScreen} from '../screen/settings/SettingsScreen';
import React from 'react';
import {HamburguerMenu} from '../components/shared/HamburguerMenu';

const Tab = createMaterialTopTabNavigator();

function TopNavigator() {
  return (
    <>
      <HamburguerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
}

export {TopNavigator};
