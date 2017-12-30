import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { darkerBlue, lightBlue } from '../utils/colors'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import {  StackNavigator } from 'react-navigation'
import QuizView from './QuizView'
import AddCard from './AddCard'
import { saveCardToDeck } from '../actions'


class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation.state.params)
    return {
      title: 'MER'//navigation.state.params.deckName
    }
  }

  addCard = (title, question, answer) => {
    this.props.saveCardToDeck(title, question, answer)
  }

  render() {
    const deckDetails = this.props.decks[this.props.navigation.state.params.deckName]
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deckDetails.title}</Text>
        <Text style={styles.sub}>{deckDetails.questions.length} cards</Text>
        <View style={styles.btnView}>
        </View>
        <TextButton
          text='Add Card'
          onPress={() => this.props.navigation.navigate('AddCard', {deckDetails: deckDetails, addCardHandler: this.addCard})}
          style={{backgroundColor: darkerBlue}}
        />
        <TextButton
          text='Start Quiz'
          onPress={() => this.props.navigation.navigate('QuizView', {questions: deckDetails.questions, deckDetails: deckDetails})}
          style={{backgroundColor: lightBlue}}
        />
      </View>
    )
  }
}

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
    color: lightBlue
  },
  btnView: {
    paddingTop: 40
  },
})



const mapDispatchToProps = (dispatch) => ({
    saveCardToDeck: (deckName, question, answer) => dispatch(saveCardToDeck(deckName, question, answer))
});
const mapStateToProps = (state) => ({decks: state})
const DeckDetailsNavigator = StackNavigator({
  Home: {
    screen: connect(mapStateToProps, mapDispatchToProps)(DeckDetails)
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTitle: 'Add Card'
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTitle: 'Quiz'
    }
  },
}, {headerMode: 'none'})

export default DeckDetailsNavigator
