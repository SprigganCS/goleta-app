import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Schedule =() =>{
    const today = new Date();
    const day = today.getDay();
    const dd = parseInt(String(today.getDate()).padStart(2, '0'));
    const mm = parseInt(String(today.getMonth() + 1).padStart(2, '0'));

    var dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];


    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.inner}>
                <Text style={styles.date}>{(dd) +'/'+mm}</Text>
                    <Text>{dias[day]}</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    
                    <Text style={styles.date}>{(dd+1) +'/'+mm}</Text>
                    <Text>{dias[(day+1)%7]}</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.date}>{(dd+2) +'/'+mm}</Text>
                    <Text>{dias[(day+2)%7]}</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.date}>{(dd+3) +'/'+mm}</Text>
                    <Text>{dias[(day+3)%7]}</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.date}>{(dd+4) +'/'+mm}</Text>
                    <Text>{dias[(day+4)%7]}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
  },
  box: {
    width: 60,
    height: 60, //50% aqui fica mais bonito
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


export default Schedule;