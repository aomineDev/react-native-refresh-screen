import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, RefreshControl, StyleSheet } from 'react-native'

import Pokemon from '../components/Pokemon'

import PokemonService from '../services/pokemon'

export default function Pokedex () {
  const [pokemon, setPokemon] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [isLoading, setIsloading] = useState(true)

  const pokemonService = new PokemonService()

  useEffect(() => {
    getAllPokemon()
  }, [])

  async function getAllPokemon () {
    try {
      const { data } = await pokemonService.getPokemon()

      setPokemon(data)
      setIsloading(false)
    } catch (error) {
      console.error(error)
    }
  }

  async function handleRefresh () {
    try {
      setRefreshing(true)
      const { data } = await pokemonService.getPokemon()

      setPokemon(data)
      setRefreshing(false)
    } catch (error) {
      console.error(error)
    }
  }

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
    >
      <Text style={styles.title}>Pokedex</Text>
      <View style={styles.container}>
        {pokemon.map(e => (
          <Pokemon
            key={e._id}
            pokemon={e}
          />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 12,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 48,
    fontWeight: '700'
  },
  container: {
    paddingHorizontal: 20
  }
})
