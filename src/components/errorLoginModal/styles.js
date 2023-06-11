import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    errorText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#151E47',
        padding: 10,
        borderRadius: 5,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf:'center',
    },
});

export default styles;
