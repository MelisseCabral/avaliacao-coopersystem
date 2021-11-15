import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1, 
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "white",
    maxHeight: "30%",
    width: "90%",
    marginTop: "50%",
    marginLeft: "5%",
  },
  modal: {
    flex: 1,
    margin: 50,
  },
  button: {
    backgroundColor: theme.colors.secondary.one,
    alignContent : 'center',
    justifyContent: 'center',
    width: "100%",
    padding: 20
  },
  buttonText: {
    color: theme.colors.primary.one,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.colors.primary.one,
    textTransform: 'uppercase',
    textAlign: "left",
    paddingLeft: 10,
    paddingRight: 10,
    margin: 15
  },
  subtitle: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 25,
    color: theme.colors.primary.one,
    textAlign: "left",
    paddingBottom: 25,
  }
});
