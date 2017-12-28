import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import DeckDetailsNavigator from './components/DeckDetails'
import { Constants } from 'expo'
import { lightBlue, darkerBlue } from './utils/colors'
import reducer from './reducers'
import devToolsEnhancer from 'remote-redux-devtools'
import { setLocalNotification } from './utils/helpers'

function FlashcardStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List'
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  },
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? 'white' : 'white',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? lightBlue : lightBlue,
    },
    indicatorStyle: {
      backgroundColor: darkerBlue
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetails: {
    screen: DeckDetailsNavigator,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: lightBlue
      }
    }
  },
})

const store = createStore(reducer, devToolsEnhancer())

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <FlashcardStatusBar backgroundColor={lightBlue} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
