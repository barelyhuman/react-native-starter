import { useTheme } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native'

import { Text } from '@/components/Text'
import { useUserStore } from '@/store/user'

export function Welcome() {
  const user = useUserStore(x => x.user)
  const theme = useTheme()
  return (
    <>
      <SafeAreaView>
        <Text m={3}>React Native Starter</Text>
        <Text mx={3} fontSize={18} color={theme.colors.accent}>
          hello {user.name}
        </Text>
      </SafeAreaView>
    </>
  )
}
