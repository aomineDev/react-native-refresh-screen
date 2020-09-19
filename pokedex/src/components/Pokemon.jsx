import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Pokemon ({ pokemon }) {
  return (
    <View style={styles.box}>
      <Image
        source={{ uri: pokemon.sprite }}
        style={styles.sprite}
      />
      <View style={styles.description}>
        <Text style={styles.name}>{pokemon.number}. {pokemon.name}</Text>
        <View style={styles.types}>
          {pokemon.types.map((type, index) => (
            <Text key={type} style={styles.type}>{index === 1 ? ' / ' : ''}{type}</Text>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 20,
    borderColor: '#262626',
    borderWidth: 1
  },
  sprite: {
    width: 100,
    height: 100
  },
  description: {
    marginLeft: 20,
    paddingTop: 12
  },
  name: {
    fontSize: 20
  },
  types: {
    flexDirection: 'row',
    marginTop: 8
  },
  type: {
    fontSize: 14,
    color: '#aaa'
  }
})
