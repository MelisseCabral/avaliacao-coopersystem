import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { IContent } from '../../interfaces/IContent';
import { styles } from './styles';

export default function ModalConfirmacao(props: { modalVisible: boolean, onConfirm: () => void , content: IContent}) {

    return (
        <Modal style={styles.button}
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
            props.onConfirm()
        }}

        >
          <View style={styles.overlay}>
            <View style={styles.container}>
              <Text style={styles.title}>{props.content.title}</Text>
              <Text style={styles.subtitle}>{props.content.description} </Text>
              <TouchableOpacity style={styles.button} onPress={props.onConfirm}>
                <Text style={styles.buttonText}>{props.content.button}</Text>
              </TouchableOpacity>
            </View>
          </View>

        
        </Modal>
    );
}