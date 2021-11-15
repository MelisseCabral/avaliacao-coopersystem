import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IYellowButtonProps {title: string, onPress: () => void}

export default function YellowButton({ title, onPress, ...props }: IYellowButtonProps) {
  
  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  );
}