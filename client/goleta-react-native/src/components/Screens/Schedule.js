import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const  Schedule =() =>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Schedule</Text>
            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: 50,
    },
});


export default Schedule;