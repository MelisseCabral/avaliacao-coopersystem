import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { IAcao } from '../../interfaces/IAcao';
import { MathUtils } from './../../utils/Math';
import { styles } from './styles';

interface IAcaoProps {
    acao: IAcao, 
    saldo: number, 
    setError(value: boolean, message: string) : void , 
    updateResgate(index: number, value: number) : void
}

export default function Acao({ acao, saldo, setError, updateResgate, ...props}: IAcaoProps) {
    const [valorTotal, setValorTotal] = useState('');
    const [valorResgate, setValorResgate] = useState('');
    const [message, setMessage] = useState('');
    const [valor, setValor] = useState(null);

    useEffect(loadInitialState, [])

    function loadInitialState() {
        const total = (acao.percentual * saldo) / 100;
        const sigla = acao.nome.slice(-7).replace(')', '').replace('(', '');
        const message = `${sigla}: Valor máximo de ${MathUtils.formatReal(total)}`;

        setValorTotal(total.toFixed(2));
        setMessage(message);
        setValorResgate(MathUtils.formatReal(0));
    }

    function changeInput(newValue: number) {
        const error = hasError();
        setError(error, message);
        updateResgate(acao.id, newValue);
    } 

    function hasError() { 
        if (valor > parseFloat(valorTotal)) {
            return true;
        }
        return false;
    }

    function handleChangeValue(value:number) {
      changeInput(value);
      setValor(value);
    }

    return (
        <View style={styles.dataForm} key={acao.id}>
            <View style={styles.dataFormItem}>
                <Text style={styles.label}>Ação</Text>
                <Text style={styles.labelValue}>{acao.nome}</Text>
            </View>
            <View style={styles.dataFormItem}>
                <Text style={styles.label}>Saldo acumulado</Text>
                <Text style={styles.labelValue}>{MathUtils.formatReal(parseFloat(valorTotal))}</Text>
            </View>
            <View style={styles.dataInputItem}>
                <Text style={styles.labelInput}>Valor a resgatar</Text>
                <CurrencyInput 
                    style={styles.textInput}
                    onChangeValue={(text: number) => handleChangeValue(text)}
                    prefix="R$"
                    delimiter="."
                    separator=","
                    precision={2}
                    minValue={0}
                    value={valor}
                    keyboardType="numeric"
                    placeholder={MathUtils.formatReal(parseFloat(valorTotal))}
                />
                <Text style={styles.helperText}>
                    {(message && hasError()) ? message : ''}
                </Text>
            </View>

        </View>
    );
}
