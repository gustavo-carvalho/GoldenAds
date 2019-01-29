import { createStore, applyMiddleware } from 'redux'
import { rootReducer, rootSaga } from './root'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()

export default createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)
