
import { StyleSheet } from 'react-native';
// GLOBAL STYLESHEET
const MyStyles = StyleSheet.create({
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
    fontSize: 36 ,
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
    width: "50%",
    padding: 4,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10
  }
});

export default MyStyles;
