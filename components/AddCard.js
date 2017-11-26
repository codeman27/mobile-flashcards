import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { lightBlue, darkerBlue } from '../utils/colors'
import TextButton from './TextButton'

class AddCard extends Component {
  static navigationOptions = () => {
    return {
      title: 'Add Card'
    }
  }
  state = {
      question: '',
      answer: ''
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>Question:</Text>
        <TextInput
          onChangeText={(question) => this.setState({question})}
          style={styles.inputField}
          placeholder='Add your new question'
          value={this.state.question}>
        </TextInput>
        <Text style={styles.title}>Answer:</Text>
        <TextInput
          onChangeText={(answer) => this.setState({answer})}
          style={styles.inputField}
          placeholder='Add your new answer'
          value={this.state.answer}>
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
    color: lightBlue
  },
  title: {
    fontSize: 20,
    color: darkerBlue,
    marginTop: 10,
    marginLeft: 5
  }
})

export default AddCard
