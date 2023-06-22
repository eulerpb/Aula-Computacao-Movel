import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    titleContainer: {
        marginBottom: 20,
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    stockListContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    stockItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    selectedItem: {
        backgroundColor: '#f2f2f2',
    },
    stockItemText: {
        fontSize: 16,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    labelText: {
        fontSize: 16,
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    addButton: {
        marginLeft: 10,
        backgroundColor: '#28a745',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    removeButton: {
        marginLeft: 10,
        backgroundColor: '#dc3545',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectedItemsContainer: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    selectedItemsText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default styles;
