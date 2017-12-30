export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const SAVE_DECK_CARD = 'SAVE_DECK_CARD'
export const SET_DECKS = 'SET_DECKS'


export function setDecks(decks) {
  return {
    type: SET_DECKS,
    decks
  }
}

export function getDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function saveDeckTitle(title) {
  const newDeck = {[title]: {
      title: title,
      questions: []
    }
  }
  return {
    type: SAVE_DECK_TITLE,
    newDeck
  }
}

export function saveCardToDeck(deckName, question, answer) {
  const newCard = {
    deckName,
    question,
    answer
  }
  return {
    type: SAVE_DECK_CARD,
    newCard
  }
}
