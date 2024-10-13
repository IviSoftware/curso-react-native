import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation();

  return (
    <View
      style={{
        marginTop: top + 20,
        paddingHorizontal: 20,
        flex: 1,
      }}>
      <Text style={{marginBottom: 20}}>ProfileScreen</Text>

      <PrimaryButton
        title="Regresar al menú"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  );
};
