import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Boxes() {
  return (
    <View style={styles.container}>
        <View style={styles.box}> 
            <View style={styles.inner}>
                <Text>Menu 1</Text>
            </View>
        </View>

        <View style={styles.box}> 
            <View style={styles.inner}>
                <Text>Menu 2</Text>
            </View>
        </View>

        <View style={styles.box}> 
            <View style={styles.inner}>
                <Text>Menu 3</Text>
            </View>
        </View>

        <View style={styles.box}> 
            <View style={styles.inner}>
                <Text>Menu 4</Text>
            </View>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center', //horizontal
    justifyContent: 'center', //vertical
    borderRadius: 5
  }
});
