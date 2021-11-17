import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  dataForm : {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  labelValue: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: "#777",
  },
  dataFormItem : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  dataInputItem : {
    margin: 10,
  },
  labelInput: {
    fontSize: 14,
    color: "#555",
    fontWeight: 'bold',
  },
  textInput: {
    padding: 10,
    fontSize: 20,
    textTransform: 'uppercase',
    borderBottomColor: "#777", 
    borderBottomWidth: 2
  },
  button: {
    backgroundColor: theme.colors.secondary.one,
    alignContent : 'center',
    justifyContent: 'center',
    padding: 30,
  },
  buttonText: {
    color: theme.colors.primary.one,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
  subtitle: {
    fontSize: 14,
    color: 'blue',
  }
});