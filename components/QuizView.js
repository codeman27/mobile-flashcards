import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { lightBlue, darkerBlue, darkRed } from '../utils/colors'
import TextButton from './TextButton'
import QuizResults from './QuizResults'

class QuizView extends Component {
  static navigationOptions = () => {
    return {
      title: 'Quiz'
    }
  }
  state = {
    curQ: 0,
    answer: false,
    correct: 0
  }

  render() {
    const { curQ, answer, correct } = this.state
    const { questions, deckDetails } = this.props.navigation.state.params
    const qNum = questions.length

    if(curQ === qNum){
      return (
        <QuizResults correct={correct} questionNum={qNum} navigation={this.props.navigation} questions={questions} deckDetails={deckDetails}/>
      )
    }
    else {
      return (
        <View style={{flex: 1}}>
          <Text style={styles.qNumSection}>{`${curQ + 1}/${qNum}`}</Text>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.question}>{answer ? questions[curQ].answer : questions[curQ].question}</Text>
            <TouchableOpacity onPress={() => this.setState({answer: answer ? false : true})}>
              <Text style={{fontSize: 16, color: darkRed, marginBottom: 30}}>{answer ? 'Question' : 'Answer'}</Text>
            </TouchableOpacity>
            <TextButton
              text='Correct'
              onPress={() => {
                this.setState({correct: correct + 1})
                this.setState({curQ: curQ + 1})
              }}
              style={{backgroundColor: 'green'}}
            />
            <TextButton
              text='Incorrect'
              onPress={() => this.setState({curQ: curQ + 1})}
              style={{backgroundColor: 'red'}}
            />
          </View>
        </View>
      )
    }

  }
}

const styles = StyleSheet.create({
  qNumSection: {
    fontSize: 20,
    color: lightBlue
  },
  question: {
    fontSize: 40,
    color: darkerBlue,
    textAlign: 'center'
  }
})

export default QuizView
