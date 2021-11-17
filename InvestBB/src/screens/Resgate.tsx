import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Acao from '../components/Acao';
import FormHeader from '../components/FormHeader';
import ModalConfirmacao from '../components/ModalConfirmacao/index';
import YellowButton from '../components/YellowButton/index';
import { IInvestimentos } from '../Interfaces/Investimentos';
import { theme } from '../styles/theme';
import { MathUtils } from '../utils/Math';
import { IAcao } from '../interfaces/IAcao';

export default function ResgateInvest(props: { navigation: any; route: any }) {
  const [investimento, setInvestimento] = React.useState<IInvestimentos>();
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessages, setErrorMessages] = React.useState<string[]>([]);
  const [modalConfirmacao, setModalConfirmacao] = React.useState<boolean>(false);
  const [modalContent, setModalContent] = React.useState({
    title: '',
    description: "",
    button: '',
  });

  const [resgates, setResgates] = React.useState([]);
  const [totalResgates, setTotalResgates] = React.useState(0);
  
  useEffect(() => {
    setInvestimento(props.route.params.investimento);
    if(props.route.params.investimento.indicadorCarencia == "S") {
      setError(true);
      setErrorMessages(["O investimento selecionado possui carência, não é possível realizar o resgate."]);
    }
    let resgates = props.route.params.investimento.acoes.map((acao: any) => {
        return {
          ...acao,
          valorResgate: 0
        };
      });
    setResgates(resgates);
  },[])

  function calculaResgate(arrayResgates: any[]) {
    let totalResgate = 0;
  
    arrayResgates.map((acao:any) => {
      parseFloat(acao.valorResgate) > 0 ? totalResgate += parseFloat(acao.valorResgate) : null;
    });
    setTotalResgates(totalResgate);
    return totalResgate;
  }

  function handleErrorChange(error: boolean, message: string) {
    setError(error);
    if(error) {
      setErrorMessages([...errorMessages, message]);
    } else {
      let newMessages = errorMessages.filter((msg: string) => msg !== message);
      setErrorMessages(newMessages);
    }
  }

  function handleResgate() {
    setModalConfirmacao(true); 
    console.log(totalResgates);
    if(totalResgates === 0) {
      setModalContent({
        title: 'DADOS INVÁLIDOS',
        description: 'Nenhum resgate foi realizado preencha o valor a ser resgatado.',
        button: 'CORRIGIR'
      });
    }
    else if(error) {
      setModalContent({
        title: 'DADOS INVÁLIDOS', 
        description: `Você preencheu um ou mais campos com valor acima do permitido:\n
        ${errorMessages.join('\n')}`, 
        button: 'CORRIGIR'}
      );
    } else {
      setModalContent({
        title: 'Resgate efetuado!', 
        description: "O valor do estará na sua conta em até 5 dias úteis! ", button: 'NOVO RESGATE'}
      );
      setModalConfirmacao(true);
    }
  }

  function handleResgateChange(index: number, value: number) {
    let newResgates = resgates.filter((acao: any) => acao.id !== index);
    let resgate = resgates.find((acao: any) => acao.id === index);
    const acao: IAcao = {...resgate, valorResgate: value}; 

    newResgates.push(acao);
    calculaResgate(newResgates);
    setResgates(newResgates);
  }


  return (

      <View style={styles.container}>
        <ScrollView >
          <FormHeader title={"Dados do Investimento"}/>
          <View style={styles.dataForm}>
            <View style={styles.dataFormItem}>
              <Text style={styles.label}>Nome</Text>
              {investimento && 
                <Text style={styles.labelValue}>{investimento.nome}</Text>
              }
            </View>
            <View style={styles.dataFormItem}>
              <Text style={styles.label}>Saldo total disponível</Text>
              {investimento && 
                <Text style={styles.labelValue}>{MathUtils.formatReal(investimento.saldoTotal)}</Text>
              }
            </View>
          </View>

          <FormHeader title={"Resgate do seu jeito"}/>

          {investimento && investimento.acoes.map((acao: number) => (
            <Acao key={acao.id} acao={acao} saldo={investimento.saldoTotal} setError={handleErrorChange} updateResgate={handleResgateChange}/>
          ))}

          <View style={styles.dataForm}>
            <View style={styles.dataFormItem}>
              <Text style={styles.label}>Valor total a resgatar</Text>
              <Text style={styles.labelValue}>{MathUtils.formatReal(totalResgates)}</Text>
            </View>
          </View>
        </ScrollView>
      
      
      <YellowButton title={"Confirmar Resgate"} onPress={handleResgate}/>
      <ModalConfirmacao 
        modalVisible={modalConfirmacao} 
        onConfirm={setModalConfirmacao} 
        content={modalContent}/>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  dataForm : {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  labelValue: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: "#777",
  },
  dataFormItem : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  dataInputItem : {
    margin: 10,
  },
  labelInput: {
    fontSize: 14,
    color: "#555",
    fontWeight: 'bold',
  },
  textInput: {
    padding: 10,
    fontSize: 20,
    textTransform: 'uppercase',
    borderBottomColor: "#777", 
    borderBottomWidth: 2
  },
  button: {
    backgroundColor: theme.colors.secondary.one,
    alignContent : 'center',
    justifyContent: 'center',
    padding: 30,
  },
  buttonText: {
    color: theme.colors.primary.one,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  subtitle: {
    fontSize: 14,
    color: 'blue',
  }
});
