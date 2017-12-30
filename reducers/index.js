import { RECEIVE_DECKS, SAVE_DECK_TITLE, SAVE_DECK_CARD, GET_DECK } from '../actions'
import { combineReducers } from 'redux'

const initialDeckState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  Javascript: {
    title: 'Javascript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function decks (state = initialDeckState, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case SAVE_DECK_TITLE:
      return {
        ...state,
          ...action.newDeck
      }
    case SAVE_DECK_CARD:
      return {
        ...state,
        ...state[action.newCard.deckName],
        state[action.newCard.deckName].questions, {question: action.newCard.question, answer: action.newCard.answer}]
      }
    default:
      return state
  }
}

function deck(state = {}, action) {
  switch (action.type) {
    case GET_DECK:
      return {
        ...state,
        ...action.deckDetails
      }
    default: return state
  }
}

export default combineReducers({
  decks,
  deck
})
