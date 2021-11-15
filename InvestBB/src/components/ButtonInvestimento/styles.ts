import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: "100%",
    padding: 10,
    minHeight: 60,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 1,
  },
  leftAlign: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  rightAlign: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: '100%',
  },
  titleInvest: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18,
  },
  titleSubInvest: {
    fontSize: 14,
    color: "#555",
  },
  valueInvest: {
    fontWeight: "bold",
    fontSize: 18,
  }
});
