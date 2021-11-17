import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    listHeader: {
      flexDirection: 'row',
      width: "100%",
      padding: 10,
      height: 50,
    },
    textHeader: {
      fontWeight: "bold",
      textTransform: "uppercase",
      fontSize: 18,
      color: "#555",
    },
    leftAlign: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
      paddingLeft: 10,
    },
    rightAlign: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      width: '100%',
    },
  });
  
