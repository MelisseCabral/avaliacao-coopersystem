
import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
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
    alignContent : 'center',
    justifyContent: 'center',  
    textAlign: 'center',
  }
});
