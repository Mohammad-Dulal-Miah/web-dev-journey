const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();



const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = 'BUY_ICE'

function buyCake() {
  return {
    type: BUY_CAKE,
  }
}

function buyIce() {
  return {
    type: BUY_ICE,
  }
}

const initialCakeState = {
  numOfCake: 10,
}

const initialIceCreamState = {
  numberOfIceCream: 20,
}

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      }

    default:
      return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      }

    default:
      return state
  }
}


const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducers,applyMiddleware(logger))

console.log('initial state', store.getState())

store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyIce())
