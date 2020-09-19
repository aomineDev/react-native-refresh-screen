import React from 'react'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constans from 'expo-constants'

import Pokedex from './src/screens/Pokedex'

export default function App () {
  return (
    <>
      <View style={styles.statusBar} />
      <Pokedex />
      <StatusBar style='dark' />
    </>
  )
}

const styles = StyleSheet.create({
  statusBar: {
    width: '100%',
    height: Constans.statusBarHeight
  }
})
