import React, {useEffect} from 'react';
import {Pressable, Text, useWindowDimensions, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {
  DrawerActions,
  type NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import type {RootStackParams} from '../../routes/StackNavigation';

const HomeScreen = () => {
  /**
   * el objeto navigation te da control sobre la navegación dentro de la app
   * NavigationProp son los tipos que usa la navegación, le indicamos que son los definidos en RootStackParams
   */

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const dimensions = useWindowDimensions();

  useEffect(() => {
    if (dimensions.width < 759) {
      navigation.setOptions({
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            <Text>Menu</Text>
          </Pressable>
        ),
      });
    } else {
      navigation.setOptions({
        headerLeft: null,
      });
    }
  }, [dimensions.width]);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        title="Productos"
        onPress={() => navigation.navigate('Products')}
      />

      <PrimaryButton
        title="Ajustes"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export {HomeScreen};
