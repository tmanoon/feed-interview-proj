import { createStore, combineReducers } from 'redux'
import { commentReducer } from './reducers/comment.reducer'

const rootReducer = combineReducers({
    commentModule: commentReducer,

})


const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)
