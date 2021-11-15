import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface IFormHeaderProps {
  title: string
}

export default function FormHeader({title, ...props} : IFormHeaderProps) {

  return (
    <View style={styles.listHeader}>
        <View style={styles.leftAlign}>
            <Text style={styles.textHeader}>{title}</Text>
        </View>
    </View>
  );
}