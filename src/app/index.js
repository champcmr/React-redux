import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer)

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log('subscribe update: ',store.getState())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
