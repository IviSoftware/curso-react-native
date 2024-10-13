/*   useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable>
          <Text onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            Menu
          </Text>
        </Pressable>
      ),
    });
  }, []); */

import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable style={{paddingLeft: 10}}>
          <Text onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            <Ionicons
              name="grid-outline"
              size={30}
              style={{marginBottom: 30}}
            />
          </Text>
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
