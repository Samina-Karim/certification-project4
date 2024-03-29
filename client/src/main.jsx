import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

/**
 * Necessary for adding redux toolkit
 */
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

/**
 * Importing reducers
 */
import taskListReducer from './reducers/taskListReducer.js'

/**
 * Creating the store w/reducers
 */
const store = configureStore({
  reducer: {
    taskLists: taskListReducer,
    

  }
})

console.log("Store is ", store.getState());

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Provider>,
)
