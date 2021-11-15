import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ButtonInvestimento from '../components/ButtonInvestimento';
import HeaderInvestimentos from '../components/HeaderInvestimentos';
import { ApiService } from '../utils/service-api';

export default function Investimentos(props: { navigation: any; }) {
  const [investimentos, setInvestimentos] = React.useState([]);

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
          <ButtonInvestimento key={index} investimento={investimento} navigation={props.navigation} />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eee',
    width: '100%',
  }
});

