import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

const Input = ({ placeholder, value, onChangeText }) =>{
    return <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
    />
}

export default Input;