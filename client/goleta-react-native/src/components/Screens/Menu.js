import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import Header from '../Header/Header';
import Boxes from '../Boxes/Boxes';

const Menu = () => {
    return (
      <View style={styles.container}>
        
        <Boxes />
        <StatusBar style="auto" />
      </View>
    );
}

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Menu;
  