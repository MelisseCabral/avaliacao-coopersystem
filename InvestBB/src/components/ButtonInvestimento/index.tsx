import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IInvestimentos } from '../../interfaces/IInvestimentos';
import { MathUtils } from '../../utils/Math';
import { styles } from './styles';

interface IInvestimentosProps {
    investimento: IInvestimentos,
    navigation: any,
}

export default function ButtonInvestimento({ investimento, navigation, ...props }: IInvestimentosProps) {
  const [investimentoState, setInvestimento] = useState<IInvestimentos>();

  useEffect(loadInitialState, []);

  function loadInitialState() {
    setInvestimento(investimento);
  }

  function navigateToResgate() {
    navigation.navigate('Resgate', {
      investimento: investimento
    });
  }

  return (
    <TouchableOpacity style={styles.listItem} onPress={navigateToResgate} disabled={investimento && investimento.indicadorCarencia === "S"}>
        {investimentoState && (
            <View style={styles.listItem}>
                <View style={styles.leftAlign}>
                  <Text style={styles.titleInvest}>{investimentoState.nome}</Text>
                  <Text style={styles.titleSubInvest}>{investimentoState.objetivo}</Text>
                </View>
                <View style={styles.rightAlign}>
                    <Text style={styles.valueInvest}>{MathUtils.formatRealNoLetter(investimentoState.saldoTotal)}</Text>
                </View>
            </View>
        )}
    </TouchableOpacity>
  );
}