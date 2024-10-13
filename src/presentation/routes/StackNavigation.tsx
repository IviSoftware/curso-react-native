import {createStackNavigator} from '@react-navigation/stack';

//Pantallas
import {HomeScreen} from '../screen/home/HomeScreen';
import {ProductScreen} from '../screen/products/ProductScreen';
import {ProfileScreen} from '../screen/profile/ProfileScreen';
import {SettingsScreen} from '../screen/settings/SettingsScreen';
import {ProductsScreen} from '../screen/products/ProductsScreen';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const Stack = createStackNavigator();

//Los parametros que pueden recibir cada pantalla
export type RootStackParams = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  Settings: undefined;
};

export function StackNavigation<RootStackParams>() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    /**Podemos pasarle estilos al header del navegator y al navegator en si */
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
