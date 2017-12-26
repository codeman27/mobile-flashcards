import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { lightBlue, darkerBlue } from '../utils/colors'
import { connect } from 'react-redux'
import { getDecks } from '../actions'

class DeckList extends Component {
  render() {
    const { decks } = this.props

    return (
      <View>
        {Object.keys(decks).map((key) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckDetails', {deckDetails: decks[key]})} style={styles.container} key={key}>
            <Text style={styles.title}>{decks[key].title}</Text>
            <Text style={{color: lightBlue}}>{decks[key].questions.length} cards</Text>
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

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
