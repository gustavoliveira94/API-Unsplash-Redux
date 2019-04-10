import React, { Component } from 'react'
import './App.css'
import Images from './components/Images'
import SearchImages from './components/SearchImages'
import Search from './components/Search'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger)
)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Search />
          <Images />
          <SearchImages />
        </div>
      </Provider>
    );
  }
}

export default App
