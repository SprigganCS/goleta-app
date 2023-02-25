import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//como receber o parametro navigation dado que o pai é "menu.js"?

export default function Boxes() {
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.box}> 
            <View style={styles.inner}>
                <TouchableOpacity
                    hitSlop= {{top: 25, right: 50, left: 50, bottom: 25}}
                    onPress={() => navigation.navigate("Schedule")}>
                    <Text>Agendar carona</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}> 
            <View style={styles.inner}>
                <TouchableOpacity
                    hitSlop= {{top: 25, right: 50, left: 50, bottom: 25}}
                    onPress={() => console.log('pressed')}>
                    <Text>Menu 2</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}> 
            <View style={styles.inner}>
                <TouchableOpacity
                    hitSlop= {{top: 25, right: 50, left: 50, bottom: 25}}
                    onPress={() => console.log('pressed')}>
                    <Text>Menu 3</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.box}> 
            <View style={styles.inner}>
                <TouchableOpacity
                    hitSlop= {{top: 25, right: 70, left: 70, bottom: 25}}
                    onPress={() => navigation.navigate("Profile")}>
                    <Text>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 5,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop:'50%'
  },
  box: {
    width: '50%',
    height: '10%', //50% aqui fica mais bonito
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    borderRadius: 5,
  },

});
