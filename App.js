import 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import FSEScreen from './FSEScreen'
import SScreen from './SScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Início"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Respiração 4-7-8"
          component={FSEScreen}
        />
        <Stack.Screen
          name="Respiração Quadrada"
          component={SScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})