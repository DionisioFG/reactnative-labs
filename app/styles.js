import { StyleSheet  } from 'react-native';

// defining styles for login form
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20
  },
  centeredContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  mainContainer:{
    alignItems: 'flex-start',
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingRight: 15
  },
  boldText: {
    fontWeight: 'bold'
  },
  marginBottom: {
    marginBottom: 15
  }
});
