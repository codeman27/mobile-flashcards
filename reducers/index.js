import { RECEIVE_DECKS, SAVE_DECK_TITLE, SAVE_DECK_CARD } from '../actions'

const initialDeckState = {
  decks:{
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
        decks: {...state.decks,
          ...action.newDeck}
      }
    case SAVE_DECK_CARD:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.newCard.deckName]: {
            ...state.decks[action.newCard.deckName],
            questions: [...state.decks[action.newCard.deckName].questions, {question: action.newCard.question, answer: action.newCard.answer}]
          }
        }
      }
    default:
      return state
  }
}

export default decks
