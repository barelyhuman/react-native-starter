import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'

import { Text } from './components/Text'
import { useUserStore } from './store/user'

const App = () => {
  const user = useUserStore(x => x.user)
  const populateUser = useUserStore(x => x.populate)

  useEffect(() => {
    let mounted = true

    if (mounted) {
      populateUser()
    }

    return () => {
      mounted = false
    }
  }, [])

  return (
    <SafeAreaView>
      <Text m={3}>React Native Starter</Text>
      <Text mx={3} fontSize={14} color={'dodgerblue'}>
        hello {user.name}
      </Text>
    </SafeAreaView>
  )
}

export default App
