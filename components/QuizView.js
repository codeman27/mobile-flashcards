import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { lightBlue, darkerBlue, darkRed } from '../utils/colors'
import TextButton from './TextButton'

class QuizView extends Component {
  state = {
    curQ: 0,
    answer: false
  }

  componentDidMount = () => {
    const { questions } = this.props.navigation.state.params
    let qNum = questions.length
  }

  render() {
    const { curQ } = this.state
    const { questions } = this.props.navigation.state.params
    const qNum = questions.length

    return (
      <View style={{flex: 1}}>
        <Text style={styles.qNumSection}>{`${curQ + 1}/${qNum}`}</Text>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.question}>{questions[curQ].question}</Text>
          <TouchableOpacity onPress={console.log('submit')}>
            <Text style={{fontSize: 16, color: darkRed, marginBottom: 30}}>Answer</Text>
          </TouchableOpacity>
          <TextButton
            text='Correct'
            onPress={() => console.log('Submit')}
            style={{backgroundColor: 'green'}}
          />
          <TextButton
            text='Incorrect'
            onPress={() => console.log('Submit')}
            style={{backgroundColor: 'red'}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  qNumSection: {
    fontSize: 20,
    color: lightBlue
  },
  question: {
    fontSize: 40,
    color: darkerBlue
  }
})

export default QuizView
