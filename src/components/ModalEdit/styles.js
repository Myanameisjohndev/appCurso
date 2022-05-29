import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    Overlay: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Content: {
        backgroundColor: 'white',
        width: '80%',
        minHeight: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    }
});