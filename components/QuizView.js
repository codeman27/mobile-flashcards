import React from 'react'
import { Text, View, } from 'react-native'

const QuizView = (props) => {
  const { questions } = props.navigation.state.params
  let qNum = questions.length
  let curQ = 0

  return (
    <View>
      <Text>{questions[curQ].question}</Text>
    </View>
  )
}

export default QuizView
