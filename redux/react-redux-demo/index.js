const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

//action
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

//state
const initialState = {
  loading: false,
  users: [],
  error: '',
}

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

function fetchUsersFailed(error) {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: '',
      }
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      }
    default:
      return state
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const users = response.data.map(user => user.id);
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {

        dispatch(fetchUsersFailed(error.message))
      })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log('initial state' , store.getState()));

store.dispatch(fetchUsers());