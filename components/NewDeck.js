import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { lightBlue, darkerBlue } from '../utils/colors'
import TextButton from './TextButton'

class NewDeck extends Component {
  state={
    deckName: ''
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          onChangeText={(deckName) => this.setState({deckName})}
          style={styles.inputField}
          placeholder='Deck Title'
          value={this.state.deckName}>
        </TextInput>
        <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
          <TextButton
            text='Submit'
            onPress={() => console.log('Submit')}
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

export default NewDeck
