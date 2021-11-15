import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  helperText: {
      margin: 10,
      color: "red",
  }
});
function updateResgate(id: any, valor: any) {
  throw new Error('Function not implemented.');
}

