export const SAVE_DECK_TITLE = 'SAVE_DECK_TITLE'
export const SAVE_DECK_CARD = 'SAVE_DECK_CARD'
export const GET_DECK = 'GET_DECK'

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

export function getDeck(deckDetails){
  return {
    type: GET_DECK,
    deckDetails
  }
}
