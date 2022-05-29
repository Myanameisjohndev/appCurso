import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListItem = ({ item, remove, edit }) => {
    return (
        <View style={styles.Container}>
            <Text>{item.name}</Text>
            <View style={styles.Row}>
                <TouchableOpacity onPress={()=> remove(item.index)}>
                    <Icon name="trash-alt" size={20} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => edit(item)}>
                    <Icon name="edit" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ListItem;