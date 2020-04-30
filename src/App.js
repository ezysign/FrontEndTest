import React from 'react';
import Wrapper from './components/Wrapper/Wrapper.js';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
import rootReducer from './reducers'
const middleware = [thunk];


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
  )
)


function App() {
  return (
    <Provider store={store}>
        <Wrapper />
    </Provider>
  );
}

export default App;
