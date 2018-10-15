import { createStore , applyMiddleware} from 'redux'
import Root from '../reducers/Root'
import logger from 'redux-logger'


const store = createStore(Root,applyMiddleware(logger))


export default store