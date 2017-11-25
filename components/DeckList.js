import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { lightBlue, darkerBlue } from '../utils/colors'


class DeckList extends Component {
  state = {
    Decks: {
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      Javascript: {
        title: 'Javascript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
  }

  render() {
    const { Decks } = this.state
    return (
      <View>
        {Object.keys(Decks).map((key) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', {deckDetails: Decks[key]})} style={styles.container} key={key}>
            <Text style={styles.title}>{Decks[key].title}</Text>
            <Text style={{color: lightBlue}}>{Decks[key].questions.length} cards</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

export default DeckList

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    borderStyle: 'solid',
    borderColor: lightBlue,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    color: darkerBlue
  }
})
