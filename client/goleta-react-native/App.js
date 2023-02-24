import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Routes from './src/components/Routes/Index';


const App = ()=>{
  return <Routes />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
