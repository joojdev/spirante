import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground, Vibration } from 'react-native'
import sakura from './assets/sakura.jpg'

const { width } = Dimensions.get('window')
const boxPadding = 20
const boxSize = width - 10 - boxPadding * 2

export default function HomeScreen({ navigation }) {
  function handleButtonFSE() {
    Vibration.vibrate(100)
    navigation.navigate('Respiração 4-7-8')
  }

  function handleButtonS() {
    Vibration.vibrate(100)
    navigation.navigate('Respiração Quadrada')
  }

  return (
    <ImageBackground source={sakura} resizeMode="cover" imageStyle={{ opacity: 0.3 }} style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Spirante</Text>

        <TouchableOpacity style={styles.button} onPress={handleButtonFSE}>
          <Text style={styles.buttonText}>Respiração 4-7-8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonS}>
          <Text style={styles.buttonText}>Respiração Quadrada</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b56475'
  },
  box: {
    backgroundColor: '#eee',
    width: boxSize,
    padding: boxPadding,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    padding: 20,
    backgroundColor: '#d65e78',
    width: '100%',
    borderRadius: 10,
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#eee',
    fontSize: 20
  }
})