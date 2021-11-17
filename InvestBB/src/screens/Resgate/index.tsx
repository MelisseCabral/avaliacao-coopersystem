import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Acao from '../../components/Acao';
import FormHeader from '../../components/FormHeader';
import ModalConfirmacao from '../../components/ModalConfirmacao/index';
import YellowButton from '../../components/YellowButton/index';
import { IAcao } from '../../interfaces/IAcao';
import { IContent } from '../../interfaces/IContent';
import { IInvestimentos } from '../../Interfaces/Investimentos';
import { MathUtils } from '../../utils/Math';
import { styles } from './styles';

export default function ResgateInvest(props: { navigation: any; route: any }) {
  const [investimento, setInvestimento] = React.useState<IInvestimentos>();
  const [error, setError] = React.useState<boolean>(false);
  const [errorMessages, setErrorMessages] = React.useState<string[]>([]);
  const [modalConfirmacao, setModalConfirmacao] = React.useState<boolean>(false);
  const [modalContent, setModalContent] = React.useState<IContent>({
    title: '',
    description: "",
    button: '',
    errors: []
  });

  const [resgates, setResgates] = React.useState<IAcao[]>([]);
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

  function handleModal() {
    setModalConfirmacao(false);
  }

  function calculaResgate(arrayResgates: any[]) {
    let totalResgate = 0;
  
    arrayResgates.map((acao:any) => {
      parseFloat(acao.valorResgate) > 0 ? totalResgate += parseFloat(acao.valorResgate) : null;
    });
    setTotalResgates(totalResgate);
    return totalResgate;
  }

  function handleErrorChange(hasError: boolean, message: string) {
    
    if(hasError && !error) {
      setErrorMessages([...errorMessages, message]);
    } else if(error && !hasError) {
      let newMessages = errorMessages.filter((msg: string) => msg !== message);
      setErrorMessages(newMessages);
    }
    setError(hasError);
  }

  function handleResgate() {
    setModalConfirmacao(true);
    if(totalResgates === 0) {
      setModalContent({
        title: 'DADOS INVÁLIDOS',
        description: 'Nenhum resgate foi realizado preencha o valor a ser resgatado.',
        button: 'CORRIGIR',
        errors: []  
      });
    }
    else if(errorMessages.length > 0) {
      setModalContent({
        title: 'DADOS INVÁLIDOS', 
        description: `Você preencheu um ou mais campos com valor acima do permitido:`,
        button: 'CORRIGIR',
        errors: [...errorMessages]
      }
      );
    } else {
      setModalContent({
        title: 'Resgate efetuado!', 
        description: "O valor do estará na sua conta em até 5 dias úteis! ", 
        button: 'NOVO RESGATE',
        errors: []}
      );
      setModalConfirmacao(true);
    }
  }

  function handleResgateChange(index: number, value: number) {
    let newResgates = resgates.filter((acao: any) => acao.id !== index);
    let resgate = resgates.find((acao: any) => acao.id === index);
    const acao = {...resgate, valorResgate: value}; 

    newResgates.push(acao as IAcao);
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

          {investimento && investimento.acoes.map((acao: IAcao, index: number) => (
            <Acao key={index} acao={acao} saldo={investimento.saldoTotal} setError={handleErrorChange} updateResgate={handleResgateChange}/>
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
        onConfirm={handleModal} 
        content={modalContent}/>
      <StatusBar style="auto" />

    </View>
  );
}
