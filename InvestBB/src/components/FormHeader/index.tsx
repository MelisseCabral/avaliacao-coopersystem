import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function FormHeader(props: {title: string}) {

  return (
    <View style={styles.listHeader}>
        <View style={styles.leftAlign}>
            <Text style={styles.textHeader}>{props.title}</Text>
        </View>
    </View>
  );
}