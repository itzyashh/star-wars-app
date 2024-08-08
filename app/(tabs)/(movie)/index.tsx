import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/componentes/Header'
import Colors from '@/constants/Colors'
import { useQuery } from '@tanstack/react-query'
import { getMovies } from '@/api/movies'
import MovieItem from '@/componentes/MovieItem'
import { Link } from 'expo-router'
import { GlobalStyles } from '@/constants/Style'

const Page = () => {

  const { data: movies, isLoading, error } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => getMovies(),
  })

  console.log(movies)

  return (
    <View style={GlobalStyles.screenContainer}>
      <Header title="Movies" />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.episode_id.toString()}
        renderItem={({ item }) => (
          <MovieItem movie={item} href={{pathname:`/detail/[url]`, params:{url:item?.url}}} />
        )}
        
      />
    </View>
  )
}

export default Page

const styles = StyleSheet.create({

})