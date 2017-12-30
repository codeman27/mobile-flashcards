import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { lightBlue, darkerBlue } from '../utils/colors'
import { connect } from 'react-redux'
import { setDecks } from '../actions'

class DeckList extends Component {
  componentDidMount() {
    const decks = {
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

    this.props.setDecks(decks);
  }

  render() {
    const decks = this.props.decks
    return (
      <View>
        {Object.keys(decks).map((key) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', {deckName: key})} style={styles.container} key={key}>
            <Text style={styles.title}>{decks[key].title}</Text>
            <Text style={{color: lightBlue}}>{decks[key].questions.length} {decks[key].questions.length == 1 ? 'card' : 'cards'}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

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

function mapStateToProps (state) {
  return {
    decks: state
  }
}


export default connect(mapStateToProps, {setDecks})(DeckList)
