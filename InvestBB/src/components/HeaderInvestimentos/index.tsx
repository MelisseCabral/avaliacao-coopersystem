import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function HeaderInvestimentos() {

  return (
    <View style={styles.listHeader}>
        <View style={styles.leftAlign}>
            <Text style={styles.textHeader}>INVESTIMENTO</Text>
        </View>
        <View style={styles.rightAlign}>
            <Text style={styles.textHeader}>R$</Text>
        </View>
    </View>
  );
}