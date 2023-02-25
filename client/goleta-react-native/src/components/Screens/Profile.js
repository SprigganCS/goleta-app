import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Profile = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
            <StatusBar style="auto" />
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: 50,
    },
});



export default Profile;