import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTools';

const enhancer = compose(DevTools.instrument());

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(
        // eslint-disable-next-line global-require
        require('../reducers'),
      ),
    );
  }

  return store;
}
