import React from 'react';
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { IContent } from '../../interfaces/IContent';
import { styles } from './styles';

interface IModalConfirmacaoProps {
  modalVisible: boolean, 
  onConfirm: () => void, 
  content: IContent,
}

export default function ModalConfirmacao({ modalVisible, onConfirm , content, ...props}: IModalConfirmacaoProps) {

    return (
        <Modal style={styles.button}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onConfirm}

        >
          <View style={styles.overlay}>
            <View style={styles.container}>
              
              <Text style={styles.title}>{content.title}</Text>
              <ScrollView>
                <Text style={styles.subtitle}>{content.description} </Text>
                {content.errors.map((error, index) => {
                  return (
                    <Text key={index} style={styles.error}>{error}</Text>
                  )
                })}
              </ScrollView>
              <TouchableOpacity style={styles.button} onPress={onConfirm}>
                <Text style={styles.buttonText}>{content.button}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
    );
}