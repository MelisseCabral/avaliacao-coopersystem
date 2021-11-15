import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IInvestimentos } from '../../interfaces/IInvestimentos';
import { MathUtils } from '../../utils/Math';
import { styles } from './styles';

export default function ButtonInvestimento(props: { investimento: any; navigation: any; }) {
  const [investimento, setInvestimento] = useState<IInvestimentos>();

  useEffect(() => setInvestimento(props.investimento), []);

  function navigateToResgate() {
    props.navigation.navigate('Resgate', {
      investimento: investimento
    });
  }

  return (
    <TouchableOpacity style={styles.listItem} onPress={navigateToResgate} disabled={investimento && investimento.indicadorCarencia === "S"}>
        {investimento && (
            <View style={styles.listItem}>
                <View style={styles.leftAlign}>
                  <Text style={styles.titleInvest}>{investimento.nome}</Text>
                  <Text style={styles.titleSubInvest}>{investimento.objetivo}</Text>
                </View>
                <View style={styles.rightAlign}>
                    <Text style={styles.valueInvest}>{MathUtils.formatRealNoLetter(investimento.saldoTotal)}</Text>
                </View>
            </View>
        )}
    </TouchableOpacity>
  );
}