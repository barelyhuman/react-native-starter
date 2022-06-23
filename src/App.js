import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { enableScreens } from 'react-native-screens'
import { ThemeProvider } from 'styled-components/native'

import { features } from '@/config/features'
import { theme } from '@/config/theme'
import { Welcome } from '@/features/Welcome'
import { useUserStore } from '@/store/user'

const Tabs = createBottomTabNavigator()
const HomeNav = createStackNavigator()

enableScreens()

const Blank = () => <></>

const HomeStack = () => {
  return (
    <HomeNav.Navigator>
      {features.WelcomeScreen && (
        <HomeNav.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
      )}
      <HomeNav.Screen
        name="Fallback"
        options={{ headerShown: false }}
        component={Blank}
      ></HomeNav.Screen>
    </HomeNav.Navigator>
  )
}

const App = () => {
  const populateUser = useUserStore(x => x.populate)

  useEffect(() => {
    let mounted = true

    if (mounted) populateUser()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <NavigationContainer theme={theme}>
      <ThemeProvider theme={theme}>
        <Tabs.Navigator screenOptions={{ headerShown: false }}>
          <Tabs.Screen name="Home" component={HomeStack} />
        </Tabs.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
