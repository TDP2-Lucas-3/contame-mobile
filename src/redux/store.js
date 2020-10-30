import {createStore} from 'redux';
import rootReducer from './reducers/root';

export default function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
