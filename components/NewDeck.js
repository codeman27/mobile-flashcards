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

  saveDeckAndNavigate = (deckName) => {
    this.props.saveDeckTitle(deckName)
    this.setState({deckName: ''})
    Keyboard.dismiss()
    this.props.navigation.navigate('DeckDetails', {deckName: deckName})
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
            onPress={() => this.saveDeckAndNavigate(this.state.deckName)}
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

function mapDispatchToProps(dispatch){
  return {
    saveDeckTitle: (title) => dispatch(saveDeckTitle(title))
  }
}

export default connect(null, mapDispatchToProps)(NewDeck)
