import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import ButtonInvestimento from '../../components/ButtonInvestimento';
import HeaderInvestimentos from '../../components/HeaderInvestimentos';
import { ApiService } from '../../utils/service-api';
import { styles } from './styles';
import { IInvestimentos } from '../../interfaces/IInvestimentos';

interface IInvestimentosProps {
  navigation: any
}

export default function Investimentos({ navigation, ...props }: IInvestimentosProps) {
  const [investimentos, setInvestimentos] = useState([]);

  useEffect(() => {
    ApiService.getInvestimentos().then((response) => {
      setInvestimentos(response.data.response.data.listaInvestimentos);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <HeaderInvestimentos />
      {investimentos && investimentos.length > 0 && investimentos.map((investimento: any, index: number) => {
        return (
          <ButtonInvestimento key={index} index={index} investimento={investimento} navigation={navigation} />
        );
      })}
    </ScrollView>
  );
}
