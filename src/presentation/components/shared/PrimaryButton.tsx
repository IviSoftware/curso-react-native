import React from 'react';
import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  onPress: () => void;
}

export const PrimaryButton = ({title, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={globalStyles.primaryButtom}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </Pressable>
  );
};
