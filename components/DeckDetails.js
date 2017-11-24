import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { darkerBlue, lightBlue } from '../utils/colors'

class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckDetails } = navigation.state.params
    return {
      title: deckDetails.title
    }
  }
  render() {
    const { deckDetails } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deckDetails.title}</Text>
        <Text style={styles.sub}>{deckDetails.questions.length} cards</Text>
        <View style={styles.btnView}>
          <Button style={styles.startBtn} title='Add Card'/>
          <Button style={styles.startBtn} title='Start Quiz'/>
        </View>
      </View>
    )
  }
}

export default DeckDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: darkerBlue
  },
  sub: {
    fontSize: 20,
    color: darkerBlue
  },
  btnView: {
    paddingTop: 40
  },
  startBtn: {
    padding: 10,
    color: lightBlue,
    borderRadius: 10
  }
})
