import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, Vibration } from 'react-native'
import { useEffect, useState, useRef } from 'react'
import sakura from './assets/sakura.jpg'

const { width } = Dimensions.get('window')
const boxPadding = 20
const boxSize = width - 10 - boxPadding * 2

const States = {
  stopped: 'Pressione o botão começar!',
  pulling: 'Puxe o ar!',
  pushing: 'Solte o ar!'
}

export default function FSEScreen() {
  const [currentState, setCurrentState] = useState(States.stopped)
  const [counter, setCounter] = useState(null)
  const timerRef = useRef(null)

  useEffect(() => {
    switch(currentState) {
      case States.stopped:
        setCounter(null)
        clearInterval(timerRef.current)
        break
      case States.pulling:
        setCounter(4)
        setTimer()
        break
      case States.pushing:
        setCounter(4)
        setTimer()
        break
    }

    return () => clearInterval(timerRef.current)
  }, [currentState])

  useEffect(() => {
    if (counter == 0) {
      clearInterval(timerRef.current)

      timerRef.current = setTimeout(() => {
        switch(currentState) {
          case States.pulling:
            setCurrentState(States.pushing)
            Vibration.vibrate(50)
            break
          case States.pushing:
            setCurrentState(States.pulling)
            Vibration.vibrate(50)
            break
        }
      }, 1000)
    }
  }, [counter])

  function setTimer() {
    timerRef.current = setInterval(() => {
      // Vibration.vibrate(50)
      setCounter(prevCounter => prevCounter - 1)
    }, 1000)
  }

  function handleButtonPress() {
    Vibration.vibrate(100)

    if (currentState != States.stopped) return setCurrentState(States.stopped)

    setCurrentState(States.pulling)
  }

  return (
    <ImageBackground source={sakura} resizeMode="cover" style={styles.container} imageStyle={{ opacity: 0.3 }}>
      <View style={styles.box}>
        <Text style={styles.statusText} numberOfLines={1} adjustsFontSizeToFit>{currentState}</Text>
        <Text style={styles.counterText}>{ counter != null ? `Por mais ${counter} segundos.` : '' }</Text>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>{ currentState == States.stopped ? 'Começar' : 'Parar' }</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b56475',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 90,
    borderRadius: 50,
    backgroundColor: '#d65e78',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#eee'
  },
  statusText: {
    fontSize: 35,
    color: '#333',
    textAlign: 'center',
    height: 60,
    textAlignVertical: 'center'
  },
  counterText: {
    fontSize: 17,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10
  },
  box: {
    backgroundColor: '#eee',
    width: boxSize,
    minHeight: boxSize * 0.75,
    padding: boxPadding,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})