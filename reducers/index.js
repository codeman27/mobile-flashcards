import { RECEIVE_DECKS, SAVE_DECK_TITLE, SAVE_DECK_CARD, SET_DECKS } from '../actions'

const initialDeckState = {}

function decks (state = initialDeckState, action) {
  switch (action.type) {
    case SET_DECKS:
      return {
        ...state,
        ...action.decks
      }
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
        [action.newCard.deckName]:
        {
          'title': action.newCard.deckName,
          'questions': [
            ...state[action.newCard.deckName].questions,
            {question: action.newCard.question, answer: action.newCard.answer}]
        }
      };
    default:
      return state
  }
}

export default decks
