
import { createStore, applyMiddleware } from 'redux'

import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

export default function configure(initialState, processEnv) {
  const env = processEnv.NODE_ENV
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const logger = createLogger()

  const createStoreWithMiddleware = env === 'development'
    ? applyMiddleware(logger, promiseMiddleware)(create)
    : applyMiddleware(promiseMiddleware)(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint global-require:0 */
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
