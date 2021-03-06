import { createStore, applyMiddleware } from 'redux'
import dashState from './reducer.js'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';


// redux logging
const logger = createLogger();

export const store = createStore(
    dashState,
    applyMiddleware(logger),
    applyMiddleware(thunk)
)
