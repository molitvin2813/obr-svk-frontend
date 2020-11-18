import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'

import MainScreenReducer from './Reducers/MainScreenReducer';
import NewsScreenReducer from './Reducers/NewsScreenReducer';
import LoginScreenreducer from './Reducers/LoginScreenReducer';

const rootReducer = combineReducers({
  MainScreenReducer,
  NewsScreenReducer,
  LoginScreenreducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const storeWithMiddleware = createStoreWithMiddleware(rootReducer);

export default storeWithMiddleware;
