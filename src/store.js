import { createStore } from 'redux';
import rootReducer from './reducer/todoreducer';

const store = createStore(rootReducer);

export default store;