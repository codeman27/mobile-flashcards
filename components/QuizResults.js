import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { darkerBlue, lightBlue } from '../utils/colors'
import TextButton from './TextButton'

const QuizResults = (props) => {
  return (
    <View style={styles.container}>
      {props.questionNum > 0 ?
        (<View style={styles.container}>
          <Text style={styles.title}>Results</Text>
          <Text style={styles.results}>{props.correct} out of {props.questionNum} correct</Text>
          <Text style={styles.results}>{Math.floor((props.correct/props.questionNum) * 100)}%</Text>
          <TextButton
            text='Restart Quiz'
            onPress={() => props.navigation.navigate('QuizView', {questions: props.questions})}
            style={{backgroundColor: darkerBlue}}
          />
          <TextButton
            text='Back to Deck'
            onPress={() => props.navigation.navigate('DeckDetails', {deckDetails: props.deckDetails})}
            style={{backgroundColor: lightBlue}}
          />
        </View>)
        : <Text style={styles.title}>Please add a question to this deck.</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: darkerBlue,
    textAlign: 'center'
  },
  results : {
    fontSize: 30,
    color: lightBlue,
    textAlign: 'center'
  },
})

export default QuizResults
