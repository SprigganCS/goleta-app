import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Profile = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SprigganCS</Text>

            <View style={styles.box}>
                <Text style={styles.data}>First Middle Last_name</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15}}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <Text style={styles.data}>+BR DDD XXXXX-XXXX</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15}}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <Text style={styles.data}>first.last@domain.something.com.br</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15}}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box}>
                <Text style={styles.data}>************</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity>
                        <Text style={{fontSize: 15}}>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
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
        marginBottom: 10,
    },
    box :{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        
    },
    data:{
        width: '80%',
        fontSize: 15,
        marginLeft: 7,
        backgroundColor: 'darkgrey',
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 40,
    },
    btnContainer: {
        marginRight: 15,
        marginLeft: 5,
        alignItems: 'center',
        width: '15%',
        backgroundColor: '#610c0c',
        borderRadius: 10,
        height: 40,

        justifyContent: 'center',

    },
});



export default Profile;