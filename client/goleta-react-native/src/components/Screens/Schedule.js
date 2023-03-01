import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';

const Schedule = () => {
    const today = new Date();
    const day = today.getDay();
    const dd = parseInt(String(today.getDate()).padStart(2, '0'));
    const mm = parseInt(String(today.getMonth() + 1).padStart(2, '0'));

    var dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const [shouldShow, setshouldShow] = useState(false);


    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState(null);
    let [response, setResponse] = useState(null);

    useEffect(() => {
        fetch('https://goleta-app-production.up.railway.app/triptime')
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoading(false);
                    setResponse(result)
                },

                (error) => {
                    setIsLoading(false);
                    setError(error);
                }
            )
    }, []);

    const getTime = (i) => {
        if (isLoading) {
            return <ActivityIndicator size="small" />;
        }

        if (error) {
            return <Text>{error}</Text>;
        }
        console.log(response.data[i].nome_passageiro);
        return <Text style={{ textAlign: 'center' }}>{response.data[i].nome_passageiro}</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <TouchableOpacity
                        hitSlop={{ top: 30, right: 30, left: 30, bottom: 30 }}
                        onPress={() => setshouldShow(!shouldShow)}>
                        <Text style={styles.date}>{(dd) + '/' + mm}</Text>
                        <Text>{dias[day]}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.date}>{(dd + 1) + '/' + mm}</Text>
                    <Text>{dias[(day + 1) % 7]}</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.date}>{(dd + 2) + '/' + mm}</Text>
                    <Text>{dias[(day + 2) % 7]}</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.date}>{(dd + 3) + '/' + mm}</Text>
                    <Text>{dias[(day + 3) % 7]}</Text>
                </View>
            </View>

            <View style={styles.box}>
                <View style={styles.inner}>
                    <Text style={styles.date}>{(dd + 4) + '/' + mm}</Text>
                    <Text>{dias[(day + 4) % 7]}</Text>
                </View>
            </View>





            <SafeAreaView>

                {
                    shouldShow ? (
                        <View style = {styles.tab}>
                            <View style={styles.hiddenContainer}>
                                <View style={styles.lin}>

                                    getTime(0)
                                    <Text style={{ textAlign: 'center', marginLeft: 10 }}>Ida</Text>


                                </View>
                                <View style={styles.lin}>
                                    <Text style={{ textAlign: 'center', marginLeft: 10 }}>Volta</Text>
                                </View>

                            </View>
                        </View>


                    ) : null
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
    tab: {
        marginTop: 30,
        width: '100%',
        height: '100%',
        //backgroundColor: 'yellow',
        alignItems: 'center',
        
    },
    hiddenContainer: {
        width: '80%',
        height: '30%',
        flexDirection: 'row',
        backgroundColor: '#eee',
        borderRadius: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    lin: {
        width: "100%",
        height: '20%',
        marginBottom: 10,
        marginTop: 37,
        //backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
});


export default Schedule;