import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { lightBlue, darkerBlue } from '../utils/colors'
import { connect } from 'react-redux'
import { getDeck } from '../actions'

class DeckList extends Component {
  getDeckAndNavigate = (deckDetails) => {
    console.log(deckDetails)
    this.props.getDeck(deckDetails)
    this.props.navigation.navigate('DeckDetails', {deckDetails: deckDetails})
  }

  render() {
    const { decks } = this.props

    return (
      <View>
        {Object.keys(decks).map((key) => (
          <TouchableOpacity onPress={() => this.getDeckAndNavigate(decks[key])} style={styles.container} key={key}>
            <Text style={styles.title}>{decks[key].title}</Text>
            <Text style={{color: lightBlue}}>{decks[key].questions ? decks[key].questions.length : 'unknown'} cards</Text>
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

function mapDispatchToProps(dispatch) {
  return {
    getDeck: (deckDetails) => dispatch(getDeck(deckDetails))
  }
}

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
