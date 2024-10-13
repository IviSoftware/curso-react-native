import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <HamburguerMenu />
      <Text>Tab1Screen</Text>
      <Ionicons name="rocket-outline" size={30} color={'red'}></Ionicons>
    </View>
  );
};
