import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { lightBlue, darkerBlue } from '../utils/colors'
import TextButton from './TextButton'

class AddCard extends Component {
  state = {
      question: '',
      answer: ''
  }

  onSubmit = (title, question, answer) => {
    this.props.navigation.state.params.addCardHandler(title, question, answer)
    this.props.navigation.goBack();
  }

  render() {
    const { title } = this.props.navigation.state.params.deckDetails
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.inputTitle}>Question:</Text>
        <TextInput
          onChangeText={(question) => this.setState({question})}
          style={styles.inputField}
          placeholder='Add your new question'
          value={this.state.question}>
        </TextInput>
        <Text style={styles.inputTitle}>Answer:</Text>
        <TextInput
          onChangeText={(answer) => this.setState({answer})}
          style={styles.inputField}
          placeholder='Add your new answer'
          value={this.state.answer}>
        </TextInput>
        <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
          <TextButton
            text='Submit'
            onPress={() => this.onSubmit(title, this.state.question, this.state.answer)}
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
    alignSelf: 'center',
    fontSize: 40,
    color: darkerBlue
  },
  inputTitle: {
    fontSize: 20,
    color: darkerBlue,
    marginTop: 10,
    marginLeft: 5
  }
})

export default AddCard
