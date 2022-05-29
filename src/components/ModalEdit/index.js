import React from 'react';
import { View, Text, Modal } from 'react-native';
import Button from '../Button';
import Input from '../Input';
import { styles } from './styles';

const ModalEdit = ({
    openModal,
    editName,
    setEditName,
    editItem,
}) => {
    return (
        <Modal
            transparent
            visible={openModal}
            animationType='slide'
        >
            <View style={styles.Overlay}>
                <View style={styles.Content}>
                    <Text style={styles.text}>Edite sua tarefa</Text>
                    <Input
                        placeholder='Digite aqui:'
                        value={editName}
                        onChangeText={setEditName}
                    />
                    <Button
                        action={editItem}
                        text='Editar'
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ModalEdit;