import React from 'react';

import { Navigation } from './components';
import { Provider } from 'react-redux';
import { store, persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Spin } from 'antd';

import 'antd/dist/antd.css'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Spin size="large" />} persistor={persistor} >
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
