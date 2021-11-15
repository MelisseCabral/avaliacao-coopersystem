import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Acao from '../../components/Acao';
import FormHeader from '../../components/FormHeader';
import ModalConfirmacao from '../../components/ModalConfirmacao/index';
import YellowButton from '../../components/YellowButton/index';
import { IAcao } from '../../interfaces/IAcao';
import { IInvestimentos } from '../../interfaces/IInvestimentos';
import { MathUtils } from '../../utils/Math';
import { styles } from './styles';

interface IResgateProps {
  navigation: any; 
  route: any
}

export default function ResgateInvest({ navigation, route, ...props }: IResgateProps) {
  const [investimento, setInvestimento] = useState<IInvestimentos>();
  const [error, setError] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [modalConfirmacao, setModalConfirmacao] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    description: "",
    button: '',
  });

  const [resgates, setResgates] = useState<IAcao[]>([]);
  const [totalResgates, setTotalResgates] = useState(0);
  
  useEffect(() => {
    setInvestimento(route.params.investimento);
    if(route.params.investimento.indicadorCarencia == "S") {
      setError(true);
      setErrorMessages(["O investimento selecionado possui carência, não é possível realizar o resgate."]);
    }
    let resgates = route.params.investimento.acoes.map((acao: any) => {
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
        description: `Você preencheu um ou mais campos com valor acima do permitido:
        \n${errorMessages.join('\n')}`, 
        button: 'NOVO RESGATE'}
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
    let newResgates : IAcao[] = resgates.filter((acao: IAcao) => acao.id !== index);
    const resgate : IAcao = resgates.find((acao: any) => acao.id === index)!;
    const acao : IAcao = {...resgate, valorResgate: value}; 

    newResgates.push(acao);
    calculaResgate(newResgates);
    setResgates(newResgates);
  }

  function handleModalConfirmacao() {
    if (!error && totalResgates > 0) {
      navigation.navigate("Investimentos");
    }
    setModalConfirmacao(false);
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

          {investimento && investimento.acoes.map((acao: IAcao) => (
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
        onConfirm={handleModalConfirmacao} 
        content={modalContent}/>
      <StatusBar style="auto" />

    </View>
  );
}