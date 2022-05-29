import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Button = ({text, action}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={()=>action()}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;