import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const Schedule =() =>{
    const today = new Date();
    const day = today.getDay();
    const dd = parseInt(String(today.getDate()).padStart(2, '0'));
    const mm = parseInt(String(today.getMonth() + 1).padStart(2, '0'));

    var dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const [shouldShow, setshouldShow] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <TouchableOpacity
                    hitSlop= {{top: 30, right: 30, left: 30, bottom: 30}}
                    onPress={() => setshouldShow(!shouldShow)}>
                        <Text style={styles.date}>{(dd) +'/'+mm}</Text>
                        <Text>{dias[day]}</Text>
                    </TouchableOpacity>
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

            
            


            <SafeAreaView>
               
                {
                    shouldShow ? (
                        <View style = {styles.hiddenContainer}>
                            <View style={styles.col}>
                                <Text style={{textAlign:'center'}}>Ida</Text>
                            </View>
                            <View style={styles.col}>
                                <Text style={{textAlign:'center'}}>Volta</Text>
                            </View>
                            
                        </View>
                            
                    ) :null
                }
                
            </SafeAreaView>
            
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
    flexWrap: 'wrap',
  },
  box: {
    width: "20%",
    height: 60,
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    borderRadius: 5,
  },
  date: {
    fontSize: 10,
  },
  hideshow:{ 
    width: '100%',
    height: '100%',
  },
  hiddenContainer:{
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  col:{
    width: "20%",
    height: '5%',
    padding: 5,
    backgroundColor: '#bbb',
  }
});


export default Schedule;