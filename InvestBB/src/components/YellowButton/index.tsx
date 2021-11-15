import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function YellowButton(props: { title: string, onPress: () => void }) {
  
  return (
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
  );
}