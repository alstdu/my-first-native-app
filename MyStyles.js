
import { StyleSheet } from 'react-native';
const MyStyles = StyleSheet.create({
    TextButton: {
        backgroundColor: 'none',
        color: '#366AF5',
        fontWeight: 'bold',
        marginTop: 10,
    },
    AddButton: {
        padding: 8,
        color: 'white',
        fontWeight: 'bold',
    },
    ButtonContainer: {
        padding: 10,
        backgroundColor: '#366AF5',
        borderRadius: 50,
        width: 130,
        marginTop: 10,
    },
    ButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    Heading: {
        fontWeight: 'bold',
        fontSize: 36,
        marginBottom: 10,
        width: 150,
    },
    HomeBgImage: {
        width: '100%',
        height: '100%',
        borderTopEndRadius: 190,
        borderTopStartRadius: 190,
        overflow: 'hidden',
        marginTop: 70
    },
    input: {
        width: "100%",
        padding: 4,
        backgroundColor: "#fff",
        borderRadius: 30,
        marginBottom: 30
    },
    InputContainer: {
        backgroundColor: '#DBDBD9',
        width: '100%',
        height: '70%',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        alignItems: 'left',
        justifyContent: 'center',
        padding: 50,
    },
    InviteContainer: {
        backgroundColor: '#DBDBD9',
        width: '100%',
        height: '60%',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        alignItems: 'left',
        justifyContent: 'center',
        padding: 30,
    },
    Circle: {
        backgroundColor: 'blue',
        width: 30,
        height: 30,
        borderRadius: 50,
    }
});

export default MyStyles;
