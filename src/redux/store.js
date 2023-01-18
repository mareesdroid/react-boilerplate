import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const loggerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let middleware = [ thunkMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  middleware = [ ...middleware, loggerMiddleware ]
}

const store = createStore(
    rootReducer,
    composeEnhancer(
    applyMiddleware(...middleware))
);

export default store;