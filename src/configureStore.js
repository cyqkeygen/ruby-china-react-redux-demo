import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import { logger } from 'redux-logger';
import reducer from './reducers';

//const loggerMiddleware = createLogger();

export default function configureStore(preLoadState) {
  return createStore(
    reducer,
    preLoadState,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  );
};
