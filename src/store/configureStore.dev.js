// @flow
import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTools';

const enhancer = compose(DevTools.instrument());

// moduleの型定義がないのでごまかす
declare var module: {
  hot: {
    accept: (string, () => void) => void,
  },
};

export default function configureStore(initialState: ?Object) {
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
