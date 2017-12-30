import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Keyboard, AsyncStorage } from 'react-native'
import { lightBlue, darkerBlue } from '../utils/colors'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../actions'
import { DECK_STORAGE_KEY } from '../utils/helpers'

class NewDeck extends Component {
  state={
    deckName: ''
  }

  componentWillReceiveProps(nextProps){
    const { decks } = nextProps
    console.log(this.props)
    this.props.navigation.navigate('DeckDetails', {deckDetails: decks[this.state.deckName]})
    this.setState({deckName: ''})
    Keyboard.dismiss()
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          onChangeText={(deckName) => this.setState({deckName})}
          style={styles.inputField}
          placeholder='Deck Title'
          value={this.state.deckName}
          underlineColorAndroid={'transparent'}
          autoCorrect={false}>
        </TextInput>
        <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
          <TextButton
            text='Submit'
            onPress={() => this.props.saveDeckTitle(this.state.deckName)}
            style={{backgroundColor: lightBlue}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    padding: 5,
    color: lightBlue,
  },
  title: {
    fontSize: 55,
    color: darkerBlue,
    textAlign: 'center'
  }
})

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

function mapDispatchToProps(dispatch){
  return {
    saveDeckTitle: (title) => dispatch(saveDeckTitle(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)
