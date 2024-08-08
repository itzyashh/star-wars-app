import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { Href, Link } from 'expo-router';
import { Movie } from '@/type/Movie';

type MovieItemProps = {
  movie: Movie;
  href: Href<string>;
};

const MovieItem: React.FC<MovieItemProps> = ({ movie, href }) => {
  return (
    <Link asChild href={href} >
    <Pressable style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.detailsContainer}>
      <Text style={styles.details}>Details</Text>
      <Ionicons name="chevron-forward" size={16} color={Colors.gainsboro} />
      </View>
    </Pressable>
    </Link>
  )
}

export default MovieItem

const styles = StyleSheet.create({
  container:{
    padding: 20,
    paddingRight: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
    title:{
        fontSize: 22,
        fontWeight: '400',
        color: Colors.white,
    },
    detailsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    details:{
        color: Colors.gainsboro,
        fontSize: 14,
    }
})